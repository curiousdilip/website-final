"use client";

import { motion } from "framer-motion";

const Subheading = ({ description, aboutSub }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
    >
      <h2 className="abSub">{aboutSub}</h2>
      <p className="page-subheading">{description}</p>
    </motion.div>
  );
};

export default Subheading;
