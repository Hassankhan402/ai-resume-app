import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        🚀 AI Resume Analyzer
      </h1>

      <p
        style={{
          textAlign: "center",
          opacity: 0.7,
          marginBottom: "30px"
        }}
      >
        Upload your resume or paste it below to get AI-powered analysis, tailored improvements, and a professional cover letter.
      </p>

      <Form setResult={setResult} />
      <Result result={result} setResult={setResult} />
    </div>
  );
}

export default App;