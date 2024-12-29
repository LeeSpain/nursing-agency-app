// src/controllers/userController.js

// Mock user data
const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

module.exports = {
  // Fetch all users
  getUsers: (req, res) => {
    res.status(200).json({
      success: true,
      message: "Users fetched successfully.",
      data: users,
    });
  },

  // Fetch a single user by ID
  getUserById: (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id, 10));
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found.`,
      });
    }
    res.status(200).json({
      success: true,
      message: `User with ID ${id} fetched successfully.`,
      data: user,
    });
  },

  // Create a new user
  createUser: (req, res) => {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });
    }

    // Check for duplicate email
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "A user with this email already exists.",
      });
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(newUser);
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: newUser,
    });
  },

  // Update an existing user
  updateUser: (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find((user) => user.id === parseInt(id, 10));
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found.`,
      });
    }

    // Validate input
    if (!name && !email) {
      return res.status(400).json({
        success: false,
        message: "At least one field (name or email) must be provided for update.",
      });
    }

    // Update user fields
    if (name) user.name = name;
    if (email) user.email = email;

    res.status(200).json({
      success: true,
      message: `User with ID ${id} updated successfully.`,
      data: user,
    });
  },

  // Delete a user
  deleteUser: (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === parseInt(id, 10));
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found.`,
      });
    }

    users.splice(userIndex, 1);
    res.status(200).json({
      success: true,
      message: `User with ID ${id} deleted successfully.`,
    });
  },
};
