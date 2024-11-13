import Image from "next/image";
import Link from "next/link";
import "./uses.css";
import Software from "../components/Software";
import Hardware from "../components/Hardware";
export default function Uses() {
  return (
    <>
      <section id="uses">
        <div className="container">
          <h1 className="uses-heading">My Gear</h1>
          <p>
            Below is the collection of tools and tech I rely on for development,
            gaming, content creation, and daily tasks.
          </p>
          <h2>My computer</h2>
          <Image
            src="/img/my-pc.jpg"
            alt="my Computer"
            width={1920}
            height={870}
            priority="true"
            layout="intrinsic"
          />
          <hr />
          <h2>My Hardware</h2>
          <Hardware />
          <hr />
          <h2>Software</h2>
          <Software />
        </div>
      </section>
    </>
  );
}
