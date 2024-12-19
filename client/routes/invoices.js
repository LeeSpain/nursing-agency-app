const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

router.get("/", async (req, res) => {
    try {
        const invoices = await Invoice.getAll();
        res.json(invoices);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch invoices" });
    }
});

router.post("/", async (req, res) => {
    const { shift_id, amount, status } = req.body;
    try {
        const newInvoice = await Invoice.create(shift_id, amount, status);
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(500).json({ error: "Failed to create invoice" });
    }
});

router.get("/shift/:shift_id", async (req, res) => {
    const { shift_id } = req.params;
    try {
        const invoice = await Invoice.getByShiftId(shift_id);
        res.json(invoice);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch invoice for shift" });
    }
});

module.exports = router;
