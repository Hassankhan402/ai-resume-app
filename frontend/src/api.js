import axios from "axios";

export const analyzeResume = async (data) => {
  const res = await axios.post(
    "https://ai-resume-app-production-fafb.up.railway.app/api/analyze",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  return res.data;
};