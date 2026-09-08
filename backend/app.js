require("dotenv").config();

const path = require("path");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");
const userRouter = require("./api/routes/user.route");
const imageUploadRouter = require("./api/routes/image-upload.routes");

const allowedOrigins = (process.env.CORS_ORIGIN || "*").split(",").map((origin) => origin.trim()).filter(Boolean);
const app = express();
app.disable("x-powered-by");
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error("Origin is not allowed by CORS"));
    },
}));
app.use((req, res, next) => {
    const originalJson = res.json.bind(res);
    res.json = (body) => {
        if (body && typeof body === "object" && !Array.isArray(body) && !Object.prototype.hasOwnProperty.call(body, "apiUrl")) {
            body = { apiUrl: req.originalUrl.split("?")[0], ...body };
        }
        return originalJson(body);
    };
    res.on("finish", () => console.log(`[API] ${req.method} ${req.originalUrl} -> ${res.statusCode}`));
    next();
});
app.use(express.static(path.join(__dirname, "api", "uploads")));
app.get("/", (req, res) => res.status(200).json({ message: "Admin Dashboard API is running" }));
app.get("/health", (req, res) => res.status(200).json({ status: "ok", database: "configured" }));
app.get("/api/v1/info", (req, res) => res.status(200).json({ message: "a2rp: an Ashish Ranjan presentation" }));
app.use("/api/v1", rateLimit({ windowMs: 15 * 60 * 1000, limit: 300, standardHeaders: "draft-8", legacyHeaders: false }), userRouter);
app.use("/api/v1", imageUploadRouter);
app.use("/api/*", (req, res) => res.status(404).json({ success: false, message: "API endpoint not found" }));
app.use((error, req, res, next) => {
    if (res.headersSent) return next(error);
    if (error.message === "Origin is not allowed by CORS") return res.status(403).json({ success: false, message: "Origin is not allowed" });
    if (error.code === "LIMIT_FILE_SIZE") return res.status(413).json({ success: false, message: "File exceeds the 5 MB limit" });
    console.error("Unhandled request error:", error.message);
    return res.status(500).json({ success: false, message: "Internal server error" });
});

module.exports = app;
