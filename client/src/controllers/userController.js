const express = require("express");
const userController = require("../../controllers/userController");

const router = express.Router();

// Define user-related routes
router.get("/", userController.getUsers); // Fetch all users
router.get("/:id", userController.getUserById); // Fetch user by ID
router.post("/", userController.createUser); // Create a new user
router.put("/:id", userController.updateUser); // Update an existing user
router.delete("/:id", userController.deleteUser); // Delete a user

module.exports = router;
