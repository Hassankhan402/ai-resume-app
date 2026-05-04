const axios = require("axios");

exports.analyzeResume = async ({ resume, job }) => {
  const prompt = `
Analyze the following resume against the job description.

Resume:
${resume}

Job:
${job}

Return ONLY valid JSON (no markdown, no backticks, no explanations):

{
  "score": number between 0-100,
  "improvements": [
    "4-6 detailed and actionable resume improvement points"
  ],
  "coverLetter": "Write a strong, professional cover letter of 250-400 words. It must include an engaging introduction, 1-2 detailed body paragraphs highlighting relevant skills and experiences, and a confident conclusion. Tailor it specifically to the job description.",
  "questions": [
    "3-5 relevant interview questions"
  ]
}
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional career assistant that writes high-quality resumes and cover letters."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      }
    }
  );

  const raw = response.data.choices[0].message.content;

  
  const cleaned = raw.replace(/```json|```/g, "").trim();

  return JSON.parse(cleaned);
};