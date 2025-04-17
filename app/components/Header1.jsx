"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./header1.scss";
import Link from "next/link";
import Image from "next/image";

const menu = {
  open: {
    width: "100%",
    height: "100%",
    top: "25px",
    right: "25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    border: "1px solid var(--color1)",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

const links = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Uses", href: "/uses" },
  { title: "Contact", href: "/contact" },
  { title: "Resume", href: "/resume" },
];

const footerLinks = [
  { title: "Github", href: "https://github.com/curiousdilip" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/curiousdilip/" },
  { title: "Codepen", href: "https://codepen.io/curiousdilip" },
  { title: "Twitter", href: "https://www.x.com/curiousdilip/" },
];

export default function Header1() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <Image
            src="/img/logo-white.svg"
            alt="dilip kumar website logo"
            width={40}
            height={40}
            aria-label="logo for my website"
            priority
          />
        </Link>
      </div>

      <div className="header">
        <motion.div
          className="menu"
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && (
              <div className="nav">
                <div className="body">
                  {links.map((link, i) => (
                    <div key={`link_${i}`} className="linkContainer">
                      <motion.div
                        custom={i}
                        variants={perspective}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                      >
                        <Link href={link.href}>{link.title}</Link>
                      </motion.div>
                    </div>
                  ))}
                </div>
                <div className="footer">
                  {footerLinks.map((link, i) => (
                    <motion.a
                      key={`footer_${i}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={slideIn}
                      custom={i}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      {link.title}
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
      </div>
    </header>
  );
}

function Button({ isActive, toggleMenu }) {
  return (
    <div className="button" onClick={toggleMenu}>
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="el">
          <PerspectiveText label="Menu" />
        </div>
        <div className="el">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className="perspectiveText">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
