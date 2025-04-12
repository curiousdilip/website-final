"use client";
import Subheading from "@/app/components/SubHeading";
import React from "react";
import Heading from "@/app/components/Heading";
import { motion } from "framer-motion";
import Image from "next/image";
const ProjectDetails = ({ project }) => {
  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="pd"
      variants={detailVariants}
      initial="hidden"
      animate="visible"
    >
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        <Heading title={project.title} />
        🔗
      </a>
      <Subheading description={project.description} />

      <ul className="tech">
        {project.tech.map((tech, index) => (
          <motion.li
            key={index}
            variants={detailVariants}
            initial="hidden"
            animate="visible"
          >
            {tech}
          </motion.li>
        ))}
      </ul>
      <div className="pd-detail">
        <motion.h2 variants={detailVariants} initial="hidden" animate="visible">
          Job Role: <span>{project.role}</span>
        </motion.h2>

        <motion.h2 variants={detailVariants} initial="hidden" animate="visible">
          Language: <span>{project.lang}</span>
        </motion.h2>

        <motion.h2 variants={detailVariants} initial="hidden" animate="visible">
          Year: <span>{project.year}</span>
        </motion.h2>
      </div>


      <div className="project-images">
        {project.imgSrc.map((img, index) => (
          <motion.div
            key={index}
            variants={detailVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={img}
              alt={`Screenshot of ${project.title} - ${index + 1}`}
              width={800} 
              height={500}
              style={{ width: "100%", height: "auto" }}
              priority={index === 0} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
