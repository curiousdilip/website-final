"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./timeline.css";

const ResumeEl = () => {
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
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
          delay: 0.1,
        }}
      >
        <Link href="/contact">Say Hello!</Link>
      </motion.div>

      <motion.div
        className="ongoing-project"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
            delay: 0.1,
          }}
        >
          <Image
            src="/img/frontend-mentor.png"
            alt="Frontend Mentor"
            width={300}
            height={200}
          />
        </motion.div>

        <motion.div className="detail">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.1,
            }}
          >
            Frontend Mentor Challenges
          </motion.h2>
          <motion.div
            className="description"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.1,
            }}
          >
            Frontend Projects is a curated collection of exercises I undertake
            to enhance my skills in frontend development through the Frontend
            Mentor platform. Frontend Mentor offers a range of real-world
            challenges designed to simulate the tasks and complexities faced in
            professional frontend development.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
              delay: 0.1,
            }}
          >
            <Link href="https://www.frontendmentor.io">Know More</Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="work-experience"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
            delay: 0.2,
          }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          className="box"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <motion.h3 className="title">Web Content Executive</motion.h3>
          <motion.h4 className="location">
            <strong>World Health Organization</strong>, New Delhi, India
          </motion.h4>
          <motion.p className="duration">Sept 2023 - Present</motion.p>
        </motion.div>

        <motion.div
          className="box"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <motion.h3 className="title">Frontend Web Developer</motion.h3>
          <motion.h4 className="location">
            <strong>Taknik Bharti</strong>, Rajasthan, India
          </motion.h4>
          <motion.p className="duration">Feb 2022 - July 2023</motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="education"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
            delay: 0.3,
          }}
        >
          Education
        </motion.h2>

        <motion.div
          className="box"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <motion.h3 className="title">
            Master of Computer Application
          </motion.h3>
          <motion.h4 className="location">
            <strong>Chandigarh University (CU)</strong>, Punjab, India
          </motion.h4>
          <motion.p className="duration">July 2024 - Present</motion.p>
        </motion.div>

        <motion.div
          className="box"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <motion.h3 className="title">
            Bachelors of Computer Application
          </motion.h3>
          <motion.h4 className="location">
            <strong>Guru Gobind Singh Indraprastha University</strong>, New
            Delhi, India
          </motion.h4>
          <motion.p className="duration">Aug 2019 - July 2022</motion.p>
        </motion.div>

        <motion.div
          className="box"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <motion.h3 className="title">Intermediate</motion.h3>
          <motion.h4 className="location">
            <strong>Mount Carmel School, Dwarka</strong>, New Delhi, India
          </motion.h4>
          <motion.p className="duration">April 2017 - May 2019</motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="skills"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
            delay: 0.4,
          }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="skill-container"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <motion.p>HTML</motion.p>
          <motion.p>CSS</motion.p>
          <motion.p>JS</motion.p>
          <motion.p>Wordpress</motion.p>
          <motion.p>React</motion.p>
          <motion.p>Git</motion.p>
          <motion.p>Github</motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResumeEl;
