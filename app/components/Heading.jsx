"use client";

import { motion } from "framer-motion";

const Heading = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
    >
      <h1 className="page-heading">{title}</h1>
    </motion.div>
  );
};

export default Heading;
