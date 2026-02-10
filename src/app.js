const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const bfhlRoutes = require("./routes/bfhl.routes");
const healthRoutes = require("./routes/health.routes");

const app = express();
app.use(express.json());

app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

module.exports = app;
