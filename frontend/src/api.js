import axios from "axios";

export const analyzeResume = async (data) => {
  const res = await axios.post(
    "http://localhost:5000/api/analyze",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  return res.data;
};