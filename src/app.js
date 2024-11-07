import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import routes
import studentRouter from "./routes/student.routes.js";
import teacherRouter from "./routes/teacher.routes.js";
import courseRouter from "./routes/course.routes.js";
import adminRouter from "./routes/admin.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/student", studentRouter);  // Student routes
app.use("/api/teacher", teacherRouter);  // Teacher routes
app.use("/api/course", courseRouter);    // Course routes
app.use("/api/admin", adminRouter);      // Admin routes

// Example root route for testing
app.get("/", (req, res) => {
  res.send("Server is running!");
});

export { app };
