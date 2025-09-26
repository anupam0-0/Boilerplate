require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
// const authRoutes = require("./routes/auth");
// const authMiddleware = require("./middleware/auth");

const app = express();

// --- Middleware ---
app.use(helmet()); // security headers
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: ["http://localhost:5173", "http://localhost:3000"],
		credentials: true,
	})
);

// --- Routes ---
// app.use("/api/auth", authRoutes);

// Protected route example
// app.get("/api/protected", authMiddleware, (req, res) => {
// 	res.json({ message: "Protected data", user: req.user });
// });

// Error handler (optional)
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Server error" });
});
app.get("/health", (req, res) => {
    res.send("API is running...");
});

module.exports = app;
