const express = require("express");
const router = express.Router();
const { analyzeResume } = require("../services/aiService");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/analyze", upload.single("file"), async (req, res) => {
  try {
    let resumeText = req.body.resume;

    // For Handlling PDF upload safely
    if (req.file) {
      try {
        const pdf = require("pdf-parse");
        const data = await pdf(req.file.buffer);
        resumeText = data.text;
      } catch (err) {
        console.error("PDF PARSE ERROR:", err.message);

        return res.status(400).json({
          error: "Invalid or unsupported PDF file. Try another PDF."
        });
      }
    }

    const result = await analyzeResume({
      resume: resumeText,
      job: req.body.job
    });

    res.json(result);
  } catch (err) {
    console.error("FULL ERROR:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;