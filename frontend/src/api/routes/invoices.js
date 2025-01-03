const express = require("express");
const invoiceController = require("../../controllers/invoiceController");

const router = express.Router();

// Define invoice-related routes
router.get("/", invoiceController.getInvoices); // Fetch all invoices
router.post("/", invoiceController.createInvoice); // Create a new invoice

module.exports = router;
