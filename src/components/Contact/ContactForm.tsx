import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

interface FormData {
  userName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  userName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formID = "15";
  const url = `https://tour-guide.pl/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`;

  const checkLength = (value: string, len: number): boolean => {
    return value.trim().length > len;
  };

  const checkEmail = (email: string): boolean => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  };

  const validateForm = (): boolean => {
    let formIsValid = true;
    const validationErrors: FormErrors = {
      userName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    if (!checkLength(formData.userName, 1)) {
      validationErrors.userName = "Pole musi zawierać minimum dwie litery.";
      formIsValid = false;
    }

    if (!checkLength(formData.subject, 1)) {
      validationErrors.subject = "Pole musi zawierać minimum dwie litery.";
      formIsValid = false;
    }

    if (!checkEmail(formData.email)) {
      validationErrors.email = "Wpisz poprawny adres email.";
      formIsValid = false;
    }

    if (!checkLength(formData.phone, 6)) {
      validationErrors.phone = "Wpisz poprawny numer telefonu.";
      formIsValid = false;
    }

    if (!checkLength(formData.message, 1)) {
      validationErrors.message = "Pole musi zawierać minimum dwie litery.";
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

    setIsLoading(true);

    const { action, method } = e.currentTarget;

    const formDataObject = new FormData();

    formDataObject.append("user-name", formData.userName);
    formDataObject.append("your-email", formData.email);
    formDataObject.append("honeypot-field", "");
    formDataObject.append("your-phone", formData.phone);
    formDataObject.append("your-subject", formData.subject);
    formDataObject.append("your-message", formData.message);
    formDataObject.append("_wpcf7_unit_tag", `form-${formID}`);

    try {
      const response = await fetch(action, {
        method,
        body: formDataObject,
      });

      const result = await response.json();

      if (result.status === "mail_sent") {
        toast.success("Twoja wiadomość została wysłana");
        setFormData({ userName: "", email: "", phone: "", subject: "", message: "" });
        setErrors({ userName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error("Wystąpił problem z wysłaniem wiadomości. Zadzwoń do Tomka +48 601 786 363");
      }
    } catch (error) {
      console.error("Error during message sending:", error);
      toast.error("Wystąpił błąd podczas wysyłania wiadomości.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form id='form-15' action={url} method='post' onSubmit={handleSubmit}>
      <h3>Zapytaj o ofertę przez formularz</h3>

      <label htmlFor='user-name'>
        Twoje imię:
        <input id='user-name' type='text' name='userName' value={formData.userName} onChange={handleChange} />
        {errors.userName && (
          <p className='form-error' id='name-error'>
            {errors.userName}
          </p>
        )}
      </label>

      <label htmlFor='your-email'>
        Twój adres email:
        <input id='your-email' type='email' name='email' value={formData.email} onChange={handleChange} />
        {errors.email && (
          <p className='form-error' id='email-error'>
            {errors.email}
          </p>
        )}
      </label>

      <input type='text' name='honeypot-field' style={{ display: "none" }} value='' readOnly />

      <label htmlFor='your-phone'>
        Twój numer telefonu:
        <input id='your-phone' type='tel' name='phone' value={formData.phone} onChange={handleChange} />
        {errors.phone && (
          <p className='form-error' id='phone-error'>
            {errors.phone}
          </p>
        )}
      </label>

      <label htmlFor='your-subject'>
        Temat wiadomości:
        <input id='your-subject' type='text' name='subject' value={formData.subject} onChange={handleChange} />
        {errors.subject && (
          <p className='form-error' id='subject-error'>
            {errors.subject}
          </p>
        )}
      </label>

      <label htmlFor='your-message'>
        Treść wiadomości:
        <textarea id='your-message' name='message' value={formData.message} onChange={handleChange} />
        {errors.message && (
          <p className='form-error' id='user-message--error'>
            {errors.message}
          </p>
        )}
      </label>

      <div id='message' className='message' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {isLoading ? (
          <Oval color='#00BFFF' height={40} width={40} />
        ) : (
          <button className='btn' type='submit'>
            Wyślij
          </button>
        )}
      </div>

      <ToastContainer position='top-center' />
    </form>
  );
};

export default ContactForm;
