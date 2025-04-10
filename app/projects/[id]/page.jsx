import { projects } from "../../data";
import ProjectDetails from "@/app/components/ProjectDetails";
import "./project-detail.scss";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

const ProjectDetail = async ({ params }) => {
  const project = projects.find((p) => p.slug === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section id="pd">
      <div className="container">
        <ProjectDetails project={project} />
      </div>
    </section>
  );
};

export default ProjectDetail;
