const express = require("express");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/student.routes.js")

dotenv.config();
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Course Management API");
});
app.use("/students", studentRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

