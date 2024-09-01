import { Router } from "express";
import sendMail from "../controllers/emailController.js";

const emailRoutes = Router();

emailRoutes.post("/send", async (req, res) => {
  console.log("routes");
  await sendMail(req, res);
});

export default emailRoutes;
