import sendMailService from "../services/emailService.js";

const sendMail = async (req, res) => {
  try {
    console.log("contoller");
    await sendMailService(req, res);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

export default sendMail;
