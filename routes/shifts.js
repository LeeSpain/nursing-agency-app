const express = require("express");
const router = express.Router();
const Shift = require("../models/Shift");

router.get("/", async (req, res) => {
    try {
        const shifts = await Shift.getAll();
        res.json(shifts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch shifts" });
    }
});

router.post("/", async (req, res) => {
    const { nurse_id, client_id, date, start_time, end_time, status } = req.body;
    try {
        const newShift = await Shift.create(nurse_id, client_id, date, start_time, end_time, status);
        res.status(201).json(newShift);
    } catch (err) {
        res.status(500).json({ error: "Failed to create shift" });
    }
});

router.get("/nurse/:nurse_id", async (req, res) => {
    const { nurse_id } = req.params;
    try {
        const shifts = await Shift.getByNurseId(nurse_id);
        res.json(shifts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch shifts for the nurse" });
    }
});

router.put("/:id/status", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedShift = await Shift.updateStatus(id, status);
        res.json(updatedShift);
    } catch (err) {
        res.status(500).json({ error: "Failed to update shift status" });
    }
});

module.exports = router;
