const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");

// Load environment variables
dotenv.config();

const userRoutes = require("./routes/users");
const shiftRoutes = require("./routes/shifts");
const invoiceRoutes = require("./routes/invoices");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
console.log("Registering routes...");
app.use("/users", (req, res, next) => {
  console.log("Users route hit");
  next();
}, userRoutes);

app.use("/shifts", (req, res, next) => {
  console.log("Shifts route hit");
  next();
}, shiftRoutes);

app.use("/invoices", (req, res, next) => {
  console.log("Invoices route hit");
  next();
}, invoiceRoutes);

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server is healthy!" });
});

// Test Route
app.get("/", (req, res) => {
  res.send("Nurse-Sync Backend is Running!");
});

// Test Error Route
app.get("/error", (req, res, next) => {
  next(new Error("This is a test error"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
