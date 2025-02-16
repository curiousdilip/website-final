"use client";
import React, { useState } from "react";
import "./contact-form.scss";
import { motion } from "framer-motion";

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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {!formSubmitted ? (
        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="form-group" variants={item}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={item}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={item}>
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={item}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="I wanted to discuss that....."
              required
            ></textarea>
          </motion.div>

          <motion.button variants={item} type="submit">
            Send
          </motion.button>
        </motion.form>
      ) : (
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
        >
          Thank you for submitting the form!
        </motion.p>
      )}
    </>
  );
};

export default ContactForm;
