"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { tech } from "../data";
import "./tech.scss";
export default function TechStack() {
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
    <div className="tech-stack">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.1,
        }}
      >
        The Technologies & Tools I used to build this site:
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.1,
        }}
      >
        I use the following technologies to build and maintain this website:
      </motion.p>
      <motion.ul variants={container} initial="hidden" animate="visible">
        {tech.map((component, index) => (
          <motion.li variants={item} key={index}>
            <p>
              <Link href="#">{component.title}:</Link>
              {component.value}
            </p>
          </motion.li>
        ))}
      </motion.ul>
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.3,
        }}
      >
        Explore the Code
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.3,
        }}
      >
        Curious about how this site is built? You can find the source code
        &nbsp;
        <Link
          href="https://github.com/curiousdilip/website2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>
        .
      </motion.p>
    </div>
  );
}
