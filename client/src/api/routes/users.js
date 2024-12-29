const express = require("express");
const User = require("./User"); // Updated path to reference the correct file location

const router = express.Router();

// Example: Fetch all users
router.get("/", (req, res) => {
  const users = [
    new User(1, "John Doe", "john.doe@example.com"),
    new User(2, "Jane Smith", "jane.smith@example.com"),
  ];
  res.status(200).json(users);
});

module.exports = router;
