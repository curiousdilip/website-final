"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./projects.css";
import { projects } from "../data";
export default function Projects() {
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <motion.div
          className="project"
          key={index}
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <Image
            src={project.imgSrc}
            alt={project.title}
            width={400}
            height={200}
            priority="intrinsic"
          />
          <div className="details">
            <h2 className="p-title">{project.title}</h2>
            <p className="description">{project.description}</p>
            {project.tech && project.tech.length > 0 && (
              <ul className="tech-stack">
                {project.tech.map((technology, techIndex) => (
                  <li key={techIndex}>{technology}</li>
                ))}
              </ul>
            )}

            <Link className="p-link" href={project.href} target="blank">
              See Live &rarr;
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
