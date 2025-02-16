"use client";
import { motion } from "framer-motion";

import React from "react";
import { timeline } from "../data";
import "./timeline.css";
import Link from "next/link";
const TimeLine = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
  };
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.1,
        }}
      >
        Professional milestones of my career:
      </motion.h3>
      <ul className="timeline">
        {timeline.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <h4 className="day"> {item.day}</h4>
            <p>
              {item.description}{" "}
              <Link href={item.link} target="_blank">
                {item.projectName}
              </Link>
            </p>
          </motion.li>
        ))}
      </ul>
      <motion.p
        className="reach-me"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.2,
        }}
      >
        You can always reach out to me to have a coffee together and discuss
        Code, Community or Collaboration. Ping me on{" "}
        <Link href="https://t.me/curiousdilip">Telegram</Link>, or reach out to
        me at{" "}
        <Link href="mailto:curiousdilip@gmail.com">
          {" "}
          curiousdilip@gmail.com
        </Link>
        .
      </motion.p>
      <motion.p
        className="reach-me"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.3,
        }}
      >
        See more about my working experiences at my{" "}
        <Link href="/resume">resume</Link> page.
      </motion.p>
    </div>
  );
};

export default TimeLine;
