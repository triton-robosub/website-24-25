import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Join our team, partner with us, or learn more about our underwater robotics projects
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <p className="contact-description">
            Join our community or reach out to learn more about Triton Robosub
          </p>
          <div className="contact-buttons">
            <a href="https://discord.gg/FmR7JbFdAV" target="_blank" rel="noopener noreferrer" className="contact-button discord">
              <span className="button-icon">💬</span>
              <div className="button-content">
                <span className="button-title">Join Discord</span>
                <span className="button-subtitle">Chat with our team</span>
              </div>
            </a>
            <a href="mailto:robosub@ucsd.edu" className="contact-button email">
              <span className="button-icon">✉️</span>
              <div className="button-content">
                <span className="button-title">Contact Us</span>
                <span className="button-subtitle">Send us an email</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="contact-info">
        <div className="contact-container">
          <div className="info-grid">
            <div className="info-item">
              <h3>Location</h3>
              <p>UC San Diego<br />La Jolla, CA</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>robosub@ucsd.edu</p>
            </div>
            <div className="info-item">
              <h3>Team</h3>
              <p>Students & Faculty<br />Engineering Focus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
