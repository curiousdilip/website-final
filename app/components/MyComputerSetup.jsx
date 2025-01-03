"use client";
import "./custompc.css";
import { motion } from "framer-motion";
import { custompc } from "../data";
import Image from "next/image";

export default function MyComputerSetup() {
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
    <div className="my-pc">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.1,
        }}
      >
        My Computer Setup
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.1,
        }}
      >
        <Image
          src="/img/my-pc.jpg"
          alt="My Computer"
          width={750}
          height={340}
          priority={true}
          layout="responsive"
        />
      </motion.div>
      <motion.div
        className="macbook"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h3 variants={item}>MacBook Air M1 (2020)</motion.h3>
        <ul>
          <li>
            A lightweight and powerful laptop perfect for on-the-go productivity
            and development tasks.
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="custom-pc"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h3>Custom PC Build</h3>

        <ul>
          {custompc.map((component, index) => (
            <motion.li key={index} variants={item}>
              <strong>{component.title}:</strong> {component.value}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
