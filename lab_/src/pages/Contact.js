import React from "react";
import "../App.css";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or suggestions, we'd love to hear from you!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
