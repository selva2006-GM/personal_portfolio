import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react"
import "./index.css";
export default function Contact({contact}) {

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
          <h1>{contact.title}</h1>
          <p>{contact.subtitle}</p>

      <div className="contact-links">

        <a 
        href={contact.email}
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaEnvelope /> Email
        </a>

        <a 
          href={contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a 
          href={contact.linkedin} 
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