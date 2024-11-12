"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./work.css";

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the data from CosmicJS API
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://api.cosmicjs.com/v3/buckets/website-projects/objects?pretty=true&query=%7B%22type%22:%22projects%22%7D&limit=10&read_key=gV37hS5tuppUOgUwDAjiKKMYsOyBfVjD4HPoVg3iCKu9YFPv2c&depth=1&props=slug,title,metadata"
        );
        const data = await res.json();

        // Check if the response contains the 'objects' array
        if (data.objects) {
          setProjects(data.objects); // Set projects data to state
        }
      } catch (error) {
        console.error("Error fetching projects data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProjects();
  }, []); // Empty dependency array to run only on mount

  if (loading) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  return (
    <section id="work">
      <div className="container">
        <h1 className="work-heading">Projects</h1>

        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <Image
                src={project.metadata.img_main.url}
                alt={project.title}
                width={300}
                height={200}
                priority="true"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="details">
                <h3 className="p-title">{project.title}</h3>
                <p className="description">
                  {project.metadata.description ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: project.metadata.description,
                      }}
                    />
                  ) : (
                    "No description available."
                  )}
                </p>
                {project.metadata.tech && project.metadata.tech.length > 0 && (
                  <ul className="tech-stack">
                    {project.metadata.tech.map((technology, techIndex) => (
                      <li key={techIndex}>{technology}</li>
                    ))}
                  </ul>
                )}

                <Link className="p-link" href={project.metadata.href}>
                  See Live &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
