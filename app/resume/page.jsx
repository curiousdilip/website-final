import Image from "next/image";
import Projects from "../components/Projects";
import "./resume.css";
import Link from "next/link";
export default function Resume() {
  return (
    <>
      <section id="resume">
        <div className="container">
          <h1 className="resume-heading">Resume</h1>
          <h2>Hey! 👋</h2>
          <p>
            I am a Frontend Web Developer passionate about crafting stylish,
            modern websites, web services, and online stores.With a keen eye for
            detail and a love for creating exceptional digital experiences, I
            specialize in designing and developing services that cater to the
            unique needs of each client.
          </p>
          <a href="/contact">Say Hello!</a>

          <div className="ongoing-project">
            <Image
              src="/img/frontend-mentor.png"
              alt="frontend end mentor"
              width={300}
              height={200}
            />
            <div className="detail">
              <h3>Frontend Mentor Challenges</h3>
              <div className="description">
                Frontend Projects is a curated collection of exercises I
                undertake to enhance my skills in frontend development through
                the Frontend Mentor platform. Frontend Mentor offers a range of
                real-world challenges designed to simulate the tasks and
                complexities faced in professional frontend development.
              </div>
              <Link href="https://www.frontendmentor.io">Know More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
