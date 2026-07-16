const express = require("express");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/student.routes.js")
const app = express();

const PORT = process.env.PORT || 3000;
dotenv.config();
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Course Management API");
});
app.use("/students", studentRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

