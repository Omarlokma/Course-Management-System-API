import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import studentRoutes from "./routes/student.routes.js";
import courseRoutes from "./routes/course.routes.js";
import instructorRoutes from "./routes/instructor.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Course Management API");
});

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/instructors", instructorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});