function Result({ result }) {
  if (!result) return null;
  const downloadCoverLetter = () => {
  const blob = new Blob([result.coverLetter], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "cover_letter.txt";
  a.click();
};

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
      }}
    >
      <h2>Analysis Result</h2>

      <h3>Match Score: {result.score}%</h3>

      <div
        style={{
          width: "100%",
          background: "#334155",
          height: "20px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      >
        <div
          style={{
            width: `${result.score}%`,
            background:
              result.score > 70
                ? "linear-gradient(90deg, #22c55e, #16a34a)"
                : result.score > 40
                ? "linear-gradient(90deg, #f59e0b, #d97706)"
                : "linear-gradient(90deg, #ef4444, #dc2626)",
            height: "100%",
            borderRadius: "10px",
            transition: "0.4s"
          }}
        />
      </div>

      <h3>Improvements</h3>
      <ul>
        {result.improvements.map((item, i) => (
          <li key={i} style={{ marginBottom: "8px" }}>
            {item}
          </li>
        ))}
      </ul>

      <h3>Cover Letter</h3>
      <div
        style={{
          background: "#0f172a",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
        
      >
        <p style={{ whiteSpace: "pre-line" }}>
          {result.coverLetter}
        </p>
      </div>
      <button
  onClick={downloadCoverLetter}
  style={{
    marginTop: "10px",
    padding: "10px 20px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer"
  }}
>
  📥 Download Cover Letter
</button>

      <h3>Interview Questions</h3>
      <ul>
        {result.questions.map((q, i) => (
          <li key={i} style={{ marginBottom: "8px" }}>
            {q}
          </li>
        ))}
      </ul>

      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer"
        }}
      >
        🔄 Analyze Again
      </button>
    </div>
  );
}

export default Result;