AI Resume Analyzer

AI Resume Analyzer is a full-stack AI-powered web application that analyzes resumes against job descriptions and generates:

* Resume match scores
* Improvement suggestions
* Tailored cover letters
* Interview questions

Users can paste resume text or upload PDF resumes for analysis.



Live Demo

Frontend (Vercel):


https://your-vercel-link.vercel.app


Backend API (Railway):

https://your-railway-link.up.railway.app



Tech Stack

Frontend

* React
* JavaScript
* HTML/CSS
* Axios

Backend

* Node.js
* Express.js
* REST APIs

AI Integration

* OpenAI API
* GPT-4o-mini

File Upload & Parsing

* Multer
* pdf-parse

Deployment

* Vercel (Frontend)
* Railway (Backend)
* GitHub (Version Control)


System Architecture

Frontend

The React frontend handles:

* Resume input
* PDF uploads
* Job description input
* API communication
* Rendering AI-generated responses

Backend

The Node.js + Express backend:

* Receives resume/job data
* Handles PDF uploads
* Extracts text from uploaded resumes
* Sends prompts to OpenAI API
* Returns structured JSON responses

AI Layer

The OpenAI API processes:

* Resume-job comparison
* Match scoring
* Cover letter generation
* Interview question generation



Workflow

1. User uploads a PDF resume or pastes resume text
2. User pastes a job description
3. Frontend sends request to backend API
4. Backend extracts resume text (if PDF uploaded)
5. Backend sends prompt to OpenAI API
6. AI returns:

   * Match score
   * Improvement suggestions
   * Cover letter
   * Interview questions
7. Frontend displays results to the user


Prompt Engineering

The backend dynamically constructs prompts using:

* Resume content
* Job description
* Structured JSON formatting requirements

The OpenAI model is instructed to return:

json
{
  "score": number,
  "improvements": [],
  "coverLetter": "",
  "questions": []
}


This ensures predictable parsing and structured frontend rendering.

---

Project Structure


ai-resume-app/
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── api.js
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── .env
│
└── README.md




Installation & Setup

Clone Repository

bash
git clone https://github.com/yourusername/ai-resume-app.git


Backend Setup

bash
cd backend
npm install


Create a `.env` file:

env
OPENAI_API_KEY=your_api_key_here


Run backend:

bash
node server.js

Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

Deployment

Backend Deployment

The backend was deployed using Railway.

Environment variables were configured securely using Railway Variables.

Frontend Deployment

The frontend was deployed using Vercel.

The frontend API endpoint was configured to communicate with the Railway backend.

---

Features

* AI-powered resume analysis
* Resume-job matching
* Tailored cover letter generation
* Interview question generation
* PDF upload support
* Responsive UI
* Full-stack deployment

---

Future Improvements

* User authentication
* Saved resume history
* Export analysis as PDF
* Advanced scoring algorithms
* Dashboard analytics
* ATS optimization suggestions

Author

Hassan Khan

GitHub:


https://github.com/Hassankhan402

LinkedIn:

https://www.linkedin.com/in/hassan-khan-ssuet
```
