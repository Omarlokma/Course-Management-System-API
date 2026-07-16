import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
import studentRoutes from "./routes/student.routes.js"
const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Course Management API");
});
app.use("/students", studentRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

