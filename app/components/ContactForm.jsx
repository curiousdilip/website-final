"use client";
import React, { useState } from "react";
import "./contact-form.css";

const ContactForm = ({ onFormSubmit }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzZYU62fT3NxS5aPtI7wpKdJAYXd6Jb41ziHshVvkqpIOz5rByy60NbJZLR6Q2LDzh1zA/exec",
        {
          method: "POST",
          body: new FormData(event.target),
        }
      );

      if (response.ok) {
        setFormSubmitted(true);
        window.alert("Thank You! \n Form submitted successfully!");
        setTimeout(() => {
          setFormSubmitted(false);
        }, 2000);
        if (onFormSubmit) {
          onFormSubmit();
        }
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="I wanted to discuss that....."
              required
            ></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      ) : (
        <p>Thank you for submitting the form!</p>
      )}
    </>
  );
};

export default ContactForm;
