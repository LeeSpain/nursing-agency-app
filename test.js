// test.js
const path = require("path");

try {
  console.log("[DEBUG] Resolving path for userController...");
  const userControllerPath = path.resolve(__dirname, "src/controllers/userController");
  console.log("Resolved userController path:", userControllerPath);

  const userController = require("./src/controllers/userController");
  console.log("[SUCCESS] userController loaded successfully");
} catch (err) {
  console.error("[ERROR] Failed to load userController:", err.message);
}
