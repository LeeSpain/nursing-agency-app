const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the nursing agency app!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
