import Heading from "@/app/components/Heading";
import { projects } from "../../data";
import Subheading from "@/app/components/SubHeading";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.title.replace(/\s+/g, "-").toLowerCase(),
  }));
}

const ProjectDetail = ({ params }) => {
  const project = projects.find(
    (p) => p.title.replace(/\s+/g, "-").toLowerCase() === params.id
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <Heading title={project.title} />
      <Subheading description={project.description} />
      <h1>{project.title}</h1>
      <img src={project.imgSrc} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
      <h3>Technologies Used:</h3>
      <ul>
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
