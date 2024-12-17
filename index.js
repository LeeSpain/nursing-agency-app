const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/users");
const shiftRoutes = require("./routes/shifts");
const invoiceRoutes = require("./routes/invoices");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/shifts", shiftRoutes);
app.use("/invoices", invoiceRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Nurse-Sync Backend is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
