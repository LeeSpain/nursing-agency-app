// Mock database for demonstration purposes
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  
  // Fetch all users
  const getUsers = (req, res) => {
    res.status(200).json({ success: true, data: users });
  };
  
  // Fetch a user by ID
  const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === userId);
    if (user) {
      res.status(200).json({ success: true, data: user });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  };
  
  // Create a new user
  const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Name and email are required" });
    }
    const newUser = {
      id: users.length + 1,
      name,
      email,
    };
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
  };
  
  // Update an existing user
  const updateUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const { name, email } = req.body;
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex !== -1) {
      const updatedUser = { ...users[userIndex], name, email };
      users[userIndex] = updatedUser;
      res.status(200).json({ success: true, data: updatedUser });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  };
  
  // Delete a user
  const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(200).json({ success: true, message: "User deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  };
  
  // Export all controller functions
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
  