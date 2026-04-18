import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react"
import "./index.css";
export default function Contact() {

    async function handleSubmit(e){

        e.preventDefault();

        const formData = new FormData(e.target);

        await fetch("http://127.0.0.1:5000/email",{
            method: "POST",
            body: formData
        });
    }

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>Let’s build something meaningful together.</p>

      <div className="contact-links">

        <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=server07052006@gmail.com&su=Let's%20Connect&body=Hi%20Selva,"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaEnvelope /> Email
        </a>

        <a 
          href="https://github.com/selva2006-GM" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/sselvaganesh2006" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
        </form>
    </section>
  );
}