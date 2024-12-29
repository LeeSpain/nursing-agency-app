const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Debugging Path Resolution
console.log("[DEBUG] __dirname:", __dirname);

// Import Routes
let userRoutes, shiftRoutes, invoiceRoutes;

try {
  userRoutes = require("./src/api/routes/users");
  console.log("[INFO] userRoutes loaded successfully");
} catch (err) {
  console.error("[ERROR] Failed to load userRoutes:", err.message);
}

try {
  shiftRoutes = require("./src/api/routes/shifts");
  console.log("[INFO] shiftRoutes loaded successfully");
} catch (err) {
  console.error("[ERROR] Failed to load shiftRoutes:", err.message);
}

try {
  invoiceRoutes = require("./src/api/routes/invoices");
  console.log("[INFO] invoiceRoutes loaded successfully");
} catch (err) {
  console.error("[ERROR] Failed to load invoiceRoutes:", err.message);
}

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
if (userRoutes) app.use("/users", userRoutes);
else console.warn("[WARN] userRoutes not registered.");

if (shiftRoutes) app.use("/shifts", shiftRoutes);
else console.warn("[WARN] shiftRoutes not registered.");

if (invoiceRoutes) app.use("/invoices", invoiceRoutes);
else console.warn("[WARN] invoiceRoutes not registered.");

// Test Route
app.get("/", (req, res) => {
  res.send("Nurse-Sync Backend is Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
