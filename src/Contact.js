// Contact.js

import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>Shelf Book Store</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Contact">Contact Us</a></li>
            <li><a href="/Team">Our Team</a></li>
          </ul>
        </nav>
      </header>

      {/* Form */}
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
