import { projects } from '../../data'; 
import Image from 'next/image';
import '../work.scss'; 

export default function ProjectDetail({ params }) {
    const { slug } = params;
    const project = projects.find((project) => project.slug === slug);
    
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div id="project-detail">
            <div className="container">
                <h1 className='project-title'>{project.title}</h1>
                <p className='project-description'>{project.description}</p>
                {project.tech && (
                    <ul className="tech-stack">
                        {project.tech.map((technology, techIndex) => (
                            <li key={techIndex}>{technology}</li>
                        ))}
                    </ul>
                )}

                <p className="job"><strong>Job Role:</strong> Web Developer</p>
                <p className="time"><strong>Duration:</strong> 2023 -present</p>

                <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={640}
                    height={320}
                    priority
                    className="img-fluid"
                />

                <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={640}
                    height={320}
                    priority
                    className="img-fluid"
                />
                <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={640}
                    height={320}
                    priority
                    className="img-fluid"
                />
                <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={640}
                    height={320}
                    priority
                    className="img-fluid"
                />

                <a className='project-link' href={project.href} target="_blank" rel="noopener noreferrer">
                    See Live &rarr;
                </a>

            </div>



        </div>
    );
}