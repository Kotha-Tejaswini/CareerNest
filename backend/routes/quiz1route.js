// const express=require("express");
// const router=express.Router();
// const getCareerSuggestions = require('../services/geminiservice');
// router.post('/careersuggestions',async(req,res)=>{
//     try{
//         const answers=req.body.answers;
//         const suggestions = await getCareerSuggestions(answers);
//         res.json({ suggestions });
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Gemini analysis failed' });
//       }
// });
// module.exports = router;

const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

router.post('/careersuggestions', async (req, res) => {
    const { score, total, subject } = req.body.answers;

    if (score === undefined || total === undefined || !subject) {
        return res.status(400).json({ error: "Missing quiz data." });
    }

    const percentage = ((score / total) * 100).toFixed(2);

    const prompt = `
A user scored ${score} out of ${total} (${percentage}%) in a quiz on "${subject}".
Based on this score, provide:
- Career suggestions in this field
- Job roles and responsibilities
- Skills to improve
- Optional salary ranges and industry info
`;

    try {
        const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash-lite" }); // Updated model path
        const result = await model.generateContent(prompt);
        const suggestionText = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No suggestions available.";

        res.json({ suggestions: suggestionText });
    } catch (error) {
        console.error("Gemini API error:", error.message);
        res.status(500).json({ error: "Failed to fetch suggestions from Gemini." });
    }
});

module.exports = router;




