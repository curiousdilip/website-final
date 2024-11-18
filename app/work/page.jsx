import "./work.css";
import Projects from "../components/Projects";

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <h1 className="work-heading">Projects</h1>
        <p>
          Below you can find a selection of personal projects I've been working
          on recently. Here you can find some excerpts from my day-to-day
          professional work.
        </p>
        <Projects />
      </div>
    </section>
  );
}
