const express = require("express");
const axios = require('axios');
const sql = require("mysql2");
const cors = require("cors");
console.log("CORS middleware is active");
const app = express();
require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:3000' // Allow frontend to communicate with backend
}));
app.use(express.json());

// Set up MySQL database connection
const db = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "1234",
  database: 'Careernest'
});

// Connect to DB
db.connect(err => {
  if (err) {
    console.error('DB connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// User Signup Route
app.post('/signup', (req, res) => {
  const { username, email, password, confirmpassword } = req.body;

  if (password !== confirmpassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const sqlQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sqlQuery, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ error: 'Error creating user or User already exists' });
    } else {
      return res.status(200).json({ message: 'User created successfully' });
    }
  });
});

// User Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sqlQuery1 = 'SELECT * FROM users WHERE username=?';
  
  db.query(sqlQuery1, [username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }
    const user = results[0];
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    return res.status(200).json({ message: 'Login successful' });
  });
});

// API Route for Career Suggestions
async function getSuggestionsFromGemini(score, total, subject) {
  try {
    // Replace this with your actual API endpoint
    const apiKey = process.env.GOOGLE_API_KEY; // Store API key securely in environment variables
    const modelPath = 'projects/gen-lang-client-0067533800/locations/global/modelsgemini-1.5-pro'; // Replace with your model path

    // Set up request parameters
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelPath}:generateContent`,
      {
        prompt: `Based on a score of ${score} out of ${total} for the subject of ${subject}, provide career suggestions.`,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        }
      }
    );

    // Assuming response contains predictions for suggestions
    return response.data.predictions; // Adjust based on actual response structure
  } catch (error) {
    console.error('Error fetching suggestions from Gemini:', error);
    throw error;
  }
}

// Endpoint for handling career suggestions
app.post("/careersuggestions", async (req, res) => {
  console.log("Received request:", req.body);  // Log the incoming data

  try {
    const { score, total, subject } = req.body.answers;
    console.log("Score:", score, "Total:", total, "Subject:", subject);  // Log quiz data

    // Get suggestions from Gemini API
    const suggestions = await getSuggestionsFromGemini(score, total, subject);
    console.log("Generated suggestions:", suggestions);

    // Send suggestions back to frontend
    res.json({ suggestions });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Test Route
app.get('/test', (req, res) => {
  res.send("Backend is working");
});

// Start Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Import quiz route
const quizRoute = require("./routes/quiz1route");
app.use('/api/analyze-quiz', quizRoute);
