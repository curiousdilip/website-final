"use client";
import Image from "next/image";
import Link from "next/link";
import "./projects.css";
import { projects } from "../data";
export default function Projects() {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
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
        </div>
      ))}
    </div>
  );
}
