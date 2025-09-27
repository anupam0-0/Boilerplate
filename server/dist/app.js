"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const auth_route_1 = __importDefault(require("./architecture/routes/auth.route"));
const auth_1 = require("./middlewares/auth");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
}));
app.use("/api/auth", auth_route_1.default);
app.get("/api/protected", auth_1.authMiddleware, (req, res) => {
    res.json({ message: "Protected data", user: req.user });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server error" });
});
app.get("/health", (req, res) => {
    res.send("Backend: API is running...");
});
exports.default = app;
//# sourceMappingURL=app.js.map