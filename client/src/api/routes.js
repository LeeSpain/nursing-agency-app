const express = require("express");

// Import individual route files
let userRoutes, shiftRoutes, invoiceRoutes;

try {
  userRoutes = require("./routes/users");
  console.log("[INFO] Successfully loaded user routes.");
} catch (error) {
  console.error("[ERROR] Failed to load userRoutes:", error.message);
}

try {
  shiftRoutes = require("./routes/shifts");
  console.log("[INFO] Successfully loaded shift routes.");
} catch (error) {
  console.error("[ERROR] Failed to load shiftRoutes:", error.message);
}

try {
  invoiceRoutes = require("./routes/invoices");
  console.log("[INFO] Successfully loaded invoice routes.");
} catch (error) {
  console.error("[ERROR] Failed to load invoiceRoutes:", error.message);
}

const router = express.Router();

// Register routes with debugging logs
console.log("[INFO] Initializing application routes...");

if (userRoutes) {
  router.use("/users", (req, res, next) => {
    console.log("[DEBUG] /users route accessed");
    next();
  }, userRoutes);
  console.log("[INFO] User routes registered.");
} else {
  console.warn("[WARN] User routes not registered due to errors.");
}

if (shiftRoutes) {
  router.use("/shifts", (req, res, next) => {
    console.log("[DEBUG] /shifts route accessed");
    next();
  }, shiftRoutes);
  console.log("[INFO] Shift routes registered.");
} else {
  console.warn("[WARN] Shift routes not registered due to errors.");
}

if (invoiceRoutes) {
  router.use("/invoices", (req, res, next) => {
    console.log("[DEBUG] /invoices route accessed");
    next();
  }, invoiceRoutes);
  console.log("[INFO] Invoice routes registered.");
} else {
  console.warn("[WARN] Invoice routes not registered due to errors.");
}

// Test route for health check
router.get("/", (req, res) => {
  console.log("[DEBUG] Root route accessed");
  res.status(200).json({
    success: true,
    message: "API Routes are working!",
  });
});

// Catch-all for undefined routes
router.use((req, res) => {
  console.error(`[ERROR] Undefined route accessed: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

module.exports = router;
