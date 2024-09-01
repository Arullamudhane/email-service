import nodemailer from "nodemailer";
const env = process.env.NODE_ENV || "development"; // Default to 'development'
import dotenv from "dotenv";
dotenv.config({ path: `.env.${env}` });
console.log("GMAIL_ID:", process.env.GMAIL_ID); // Add this line to check if the variable is loaded
console.log("GMAIL_PASS:", process.env.GMAIL_PASS); // Add this line to check if the variable is loaded

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PASS,
  },
});

export default transporter;
