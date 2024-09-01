import EmailBuilder from "../builder/emailBuilder.js";
import nodemailer from "nodemailer";

import transporter from "../config/nodemailerconfig.js";

console.log("GMAIL_IDSERVICE:", process.env.GMAIL_ID); // Add this line to check if the variable is loaded
console.log("GMAIL_PASS:", process.env.GMAIL_PASS); // Add this line to check if the variable is loaded

const sendMailService = async (req, res) => {
  console.log(process.env.GMAIL_ID);
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: process.env.GMAIL_ID,
  //       pass: process.env.GMAIL_PASS,
  //     },
  //   });
  try {
    const email = new EmailBuilder()
      .setFrom("testmailforyoudood@gmail.com")
      .setTo("lcarull33@gmail.com")
      .setSubject("subject")
      .setText("text")
      .build();

    console.log(email);

    await transporter.sendMail(email, (error, info) => {
      if (error) {
        return console.log("Error occurred:", error);
      }
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    // Handle any errors that occur
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

export default sendMailService;
