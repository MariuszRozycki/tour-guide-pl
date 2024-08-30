import React, { useState } from "react";

interface FormData {
  userName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  userName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");

  const checkLength = (value: string, len: number): boolean => {
    return value.trim().length > len;
  };

  const checkEmail = (email: string): boolean => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  };

  const validateForm = (): boolean => {
    let formIsValid = true;
    const validationErrors: FormErrors = { userName: "", email: "", subject: "", message: "" };

    if (!checkLength(formData.userName, 1)) {
      validationErrors.userName = "Field must have minimum 2 characters!";
      formIsValid = false;
    }

    if (!checkLength(formData.subject, 1)) {
      validationErrors.subject = "Field must have minimum 2 characters!";
      formIsValid = false;
    }

    if (!checkEmail(formData.email)) {
      validationErrors.email = "Write correct e-mail address";
      formIsValid = false;
    }

    if (!checkLength(formData.message, 1)) {
      validationErrors.message = "Field must have minimum 2 characters!";
      formIsValid = false;
    }

    setErrors(validationErrors);
    return formIsValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { action, method } = e.currentTarget;
    const formDataObject = new FormData();

    formDataObject.append("user-name", formData.userName);
    formDataObject.append("your-email", formData.email);
    formDataObject.append("your-subject", formData.subject);
    formDataObject.append("your-message", formData.message);

    try {
      const response = await fetch(action, {
        method,
        body: formDataObject,
      });

      const result = await response.json();
      console.log(result);

      if (result.status === "mail_sent") {
        setResponseMessage("Your message has been sent.");
        setFormData({ userName: "", email: "", subject: "", message: "" });
        setErrors({ userName: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage("There was a problem sending your message.");
      }
    } catch (error) {
      console.error("Error during message sending:", error);
      setResponseMessage("An error occurred while sending your message.");
    }
  };

  return (
    <form
      id="form"
      action="https://mariuszrozycki.info/portfolio/wp-json/contact-form-7/v1/contact-forms/5/feedbac"
      method="post"
      onSubmit={handleSubmit}
    >
      <h3>Zapytaj o oferte przez formularz</h3>
      <label htmlFor="user-name">
        Your name (min. 2 characters!)
        <input id="user-name" type="text" name="userName" value={formData.userName} onChange={handleChange} />
        {errors.userName && (
          <p className="form-error" id="name-error">
            {errors.userName}
          </p>
        )}
      </label>

      <label htmlFor="your-email">
        Your email
        <input id="your-email" type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && (
          <p className="form-error" id="email-error">
            {errors.email}
          </p>
        )}
      </label>

      <label htmlFor="your-subject">
        Subject (min. 2 characters!)
        <input id="your-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} />
        {errors.subject && (
          <p className="form-error" id="subject-error">
            {errors.subject}
          </p>
        )}
      </label>

      <label htmlFor="your-message">
        Your message (min. 2 characters!)
        <textarea id="your-message" name="message" value={formData.message} onChange={handleChange} />
        {errors.message && (
          <p className="form-error" id="user-message--error">
            {errors.message}
          </p>
        )}
      </label>

      <div id="message" className="message">
        {responseMessage && <p>{responseMessage}</p>}
      </div>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
