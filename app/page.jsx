"use client";
import Link from "next/link";
import "./page.css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="info">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
            >
              Dilip Kumar Maurya
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.225,

                ease: "anticipate",
              }}
            >
              Frontend Web Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.115,

                ease: "anticipate",
              }}
            >
              Passionate about crafting stylish, modern websites, web services,
              and online stores, specializing in designing and developing
              services tailored to each client's unique needs.
            </motion.p>
            <ul>
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "anticipate",
                }}
              >
                <Link href="/projects">
                  <i className="bi bi-laptop"></i> What I have Built?
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2,

                  ease: "anticipate",
                }}
              >
                <Link href="/about">
                  <i className="bi bi-person-vcard"></i> More about myself
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "anticipate",
                  delay: 0.3,
                }}
              >
                <Link href="/resume">
                  <i className="bi bi-file-earmark-text"></i> My Latest Resume
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "anticipate",
                  delay: 0.4,
                }}
              >
                <Link href="/contact">
                  <i className="bi bi-telephone"></i> Contact Me
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
