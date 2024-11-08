import Image from "next/image";
import { projects } from "../data";
import "./work.scss";
import Link from "next/link";
export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <h1 className="work-heading">Projects</h1>

        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={300}
                height={200}
                priority="true"
                layout="intrinsic"
              />
              <div className="details">
                <h3 className="p-title">{project.title}</h3>
                <p className="description">{project.description}</p>

                {project.tech ? (
                  <ul className="tech-stack">
                    {project.tech.map((technology, techIndex) => (
                      <li key={techIndex}>{technology}</li>
                    ))}
                  </ul>
                ) : null}

                <Link className="p-link" href={`/work/${project.slug}`}>
                  See Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
