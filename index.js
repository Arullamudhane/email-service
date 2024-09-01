const env = process.env.NODE_ENV || "development"; // Default to 'development'
import dotenv from "dotenv";
dotenv.config({ path: `.env.${env}` });
dotenv.config({ path: `.env.${env}` });

import express from "express";

import emailRoutes from "./src/routes/emailRoutes.js";
import "./src/config/nodemailerconfig.js";

const app = express();

const version = "/api/v1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace to the console

  res.status(500).json({
    message: "Internal Server Error",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Please try again later.",
  });
});

app.get("/testify", (req, res) => {
  const val = process.env.value;
  res.status(200).json({ key: val });
});

app.use(`${version}/email`, emailRoutes);

app.listen(PORT, () => {
  console.log("Email service is listening on", PORT);
});
