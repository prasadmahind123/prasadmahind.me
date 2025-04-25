"use client"

import { useState , useRef } from "react"
import "../Style/Contact.css"
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject , setSubject] = useState('')
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_bxydny5', 'template_iehndh3', form.current, {
        publicKey: '5nLFoK4nreUybqPpH',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setSubject('');
          
          setMessage('');
        },
        (error) => {
          console.error('Email sending error:', error);
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Contact Me</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I&apos;m currently available for freelance work or full-time positions. If you have a project that needs coding
            or if you&apos;re looking for a developer to join your team, feel free to contact me.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Maharashtra , India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>prasadmahind34@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+91 935 695 1755</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a target="_blank" href="https://github.com/prasadmahind123" aria-label="GitHub">
              <img src="/github-brands.svg" alt="" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/prasad-mahind-185bb6290/" aria-label="LinkedIn">
              <img src="linkedin-in-brands.svg" alt="" width={20} />
            </a>
            <a target="_blank" href="https://x.com/PrasadMahi86690" aria-label="Twitter">
              <img src="x-twitter-brands.svg" alt="" width={20} />
            </a>

          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>

            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
