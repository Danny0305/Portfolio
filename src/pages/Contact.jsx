import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Get from environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Get from environment variable
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Get from environment variable
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email sending error:", error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Have a project in mind? Let’s talk!</p>

      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your Name" required />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}

      <p className="alt-contact">
        Prefer email? <a href="mailto:diigbokwe35@gmail.com">Drop a mail</a>
      </p>
    </div>
  );
}

export default Contact;
