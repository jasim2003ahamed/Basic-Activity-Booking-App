require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



const authRoutes = require("./routes/auth");
const activityRoutes = require("./routes/activities");
const connectDB = require("./config/db");

const app = express()
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

