const express = require("express");
const path = require("path"); // Add path module for debugging
const router = express.Router();
const userController = require('../controllers/userController');

// Debugging Logs
console.log("Registering routes...");
console.log("Current Directory:", __dirname);
console.log("Resolved Path to userController:", path.resolve(__dirname, '../controllers/userController'));
console.log("UserController loaded:", userController);
console.log("Available controller methods:", Object.keys(userController));

// Routes
router.get("/users", (req, res) => {
  console.log("GET /users hit");
  userController.getUsers(req, res);
});

router.get("/users/:id", (req, res) => {
  console.log(`GET /users/${req.params.id} hit`);
  userController.getUserById(req, res);
});

router.post("/users", (req, res) => {
  console.log("POST /users hit");
  userController.createUser(req, res);
});

router.put("/users/:id", (req, res) => {
  console.log(`PUT /users/${req.params.id} hit`);
  userController.updateUser(req, res);
});

router.delete("/users/:id", (req, res) => {
  console.log(`DELETE /users/${req.params.id} hit`);
  userController.deleteUser(req, res);
});

module.exports = router;
