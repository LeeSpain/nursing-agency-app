const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Define port
const PORT = process.env.PORT || 3001;

// Start server
app.listen(PORT, () => {
  console.log(`[INFO] Server running on http://localhost:${PORT}`);
});