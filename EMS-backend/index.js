const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const employeeRoutes = require("./routes/employeeRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);


// Middleware
app.use(cors());
app.use(express.json());

app.use(loggerMiddleware);


// Routes
app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {
  res.send("Employee Management API Running");
});


// MongoDB Connection
mongoose.connect("mongodb+srv://lakshayyadav2847_db_user:kfxwpfZtpP3w7kTK@cluster0.vhhnuuv.mongodb.net/EMS")
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log("MongoDB Error:", err);
});


// Server
app.listen(5100, () => {
  console.log("Server Running on Port 5100");
});