import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

// routes
import authRoutes from "./architecture/routes/auth.route";

// middlewares
import { authMiddleware } from "./middlewares/auth";
import { errorHandler } from "./middlewares/errorHandler";
import { jsonErrorHandler } from "./middlewares/jsonErrorHandler";


dotenv.config();
const app = express();


// --- Middleware ---
app.use(helmet()); // security headers
app.use(express.json({ limit: '10mb' })); // Add size limit for JSON payloads
app.use(jsonErrorHandler); // Handle JSON parsing errors
app.use(cookieParser());
app.use(
	cors({
		origin: ["http://localhost:5173", "http://localhost:3000"],
		credentials: true,
	})
);


// --- Routes ---
app.use("/api/auth", authRoutes);
// app.use("/api/admin", protected('admin'), authRoutes);


// Protected route example
app.get("/api/protected", authMiddleware, (req: Request, res: Response) => {
	res.json({ message: "Protected data", user: req.user });
});


// Error Middlware
app.use(errorHandler);


app.get("/health", (req: Request, res: Response) => {
    res.send("Backend: API is running...");
});

export default app;
