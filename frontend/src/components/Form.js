import { useState } from "react";
import { analyzeResume } from "../api";

function Form({ setResult }) {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!job) {
      alert("Please add job description");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("job", job);

      if (file) {
        formData.append("file", file);
      } else {
        formData.append("resume", resume);
      }

      const data = await analyzeResume(formData);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "30px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
      }}
    >
      <h2>Analyze Your Resume</h2>

      <textarea
        placeholder="Paste your resume (or upload PDF below)..."
        rows="5"
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "none"
        }}
        onChange={(e) => setResume(e.target.value)}
      />

      <input
  type="file"
  accept=".pdf"
  id="fileUpload"
  style={{ display: "none" }}
  onChange={(e) => setFile(e.target.files[0])}
/>

<button
  onClick={() => document.getElementById("fileUpload").click()}
  style={{
    padding: "12px 25px",
    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "10px"
  }}
>
  📄 Choose Resume PDF
</button>

{file && (
  <p style={{ fontSize: "14px", opacity: 0.7 }}>
    Selected: {file.name}
  </p>
)}
      <textarea
        placeholder="Paste job description..."
        rows="5"
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "none"
        }}
        onChange={(e) => setJob(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: "12px 25px",
          background: loading
            ? "#64748b"
            : "linear-gradient(135deg, #3b82f6, #6366f1)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
          fontWeight: "bold"
        }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}

export default Form;