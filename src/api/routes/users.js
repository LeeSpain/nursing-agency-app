const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
    try {
        const users = await User.getAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

router.post("/", async (req, res) => {
    const { name, email, role, password } = req.body;
    try {
        const newUser = await User.create(name, email, role, password);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: "Failed to create user" });
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.getById(id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
});

module.exports = router;
