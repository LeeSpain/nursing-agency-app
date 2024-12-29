const express = require("express");
const shiftController = require("../../controllers/shiftController");

const router = express.Router();

// Define shift-related routes
router.get("/", shiftController.getShifts); // Fetch all shifts
router.post("/", shiftController.createShift); // Create a new shift

module.exports = router;
