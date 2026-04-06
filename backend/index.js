const express = require("express");
const cors = require("cors");
const db = require("./db");
const path = require("path");

global.otpStore = {};

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

// frontend static
app.use(express.static(path.join(__dirname, "../frontend")));

// page routes
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/login"));
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});