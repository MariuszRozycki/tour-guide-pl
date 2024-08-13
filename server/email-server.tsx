import dotenv from "dotenv";
import express from "../node_modules/express";
import nodemailer from "../node_modules/nodemailer";

dotenv.config();

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} o godzinie ${currentDate.toLocaleTimeString()}`;

  // E-mail do Ciebie
  const mailOptionsToYou = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nowa wiadomość od ${name}`,
    text: `Otrzymałeś wiadomość od ${name} (${email}):\n\n${message}`,
  };

  // E-mail do nadawcy
  const mailOptionsToSender = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Dziękujemy za wiadomość!",
    text: `Cześć ${name}. W dniu ${formattedDate} otrzymałem maila od Ciebie. Odpowiem jak najszybciej będzie to możliwe.`,
  };

  transporter.sendMail(mailOptionsToYou, (error, info) => {
    console.log("mailOptionsToYou 'info' in email.server.ts: ", info);
    if (error) {
      return res.status(500).send("Error sending email to you: " + error.message);
    }

    transporter.sendMail(mailOptionsToSender, (error, info) => {
      console.log("mailOptionsToSender 'info' in email.server.ts: ", info);
      if (error) {
        return res.status(500).send("Error sending email to sender: " + error.message);
      }

      res.status(200).send("Emails sent successfully");
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
