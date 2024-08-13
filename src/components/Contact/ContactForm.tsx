import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Wysyłanie danych na backend
      await axios.post("/api/send-email", formData);
      alert("E-mail został wysłany!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Wystąpił błąd podczas wysyłania e-maila.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-el-wrapper">
        <label htmlFor="name">
          Imię:
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </label>
      </div>
      <div className="form-el-wrapper">
        <label htmlFor="email">
          E-mail:
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>
      <div className="form-el-wrapper">
        <label htmlFor="message">
          Wiadomość:
          <textarea name="message" id="message" value={formData.message} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Wyślij</button>
      <div className="greetings-wrapper">
        <p>Z wyrazami szacunku,</p>
        <p>Tomasz Zdunek Właściciel Tour Guide</p>
      </div>
    </form>
  );
};

export default ContactForm;
