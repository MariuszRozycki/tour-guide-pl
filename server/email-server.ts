import nodemailer from "nodemailer";
import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const sendEmail = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  // Konfiguracja nodemailer przy użyciu zmiennych środowiskowych
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Użycie zmiennej środowiskowej dla e-maila
      pass: process.env.EMAIL_PASS, // Użycie zmiennej środowiskowej dla hasła
    },
    debug: true,
  });

  const mailOptions = {
    from: email,
    to: "mariansc83@gmail.com",
    subject: `Nowa wiadomość od ${name}`,
    text: message,
    html: `<p><strong>Imię:</strong> ${name}</p>
           <p><strong>E-mail:</strong> ${email}</p>
           <p><strong>Wiadomość:</strong></p>
           <p>${message}</p>`,
  };

  try {
    // Wysyłanie maila
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail został wysłany!" });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error data:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
  }

  res.status(500).json({ message: "Wystąpił błąd podczas wysyłania e-maila." });
};

module.exports = sendEmail;
