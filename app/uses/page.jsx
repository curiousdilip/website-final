import Image from "next/image";
import { hardware, software } from "../data";
import Link from "next/link";
import "./uses.scss";
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
            src="/projects/dilipmaurya.png"
            alt="my Computer"
            width={1920}
            height={200}
            priority="true"
            layout="intrinsic"
          />
          <hr />
          <h2>My Hardware</h2>
          <div className="hardware">
            {hardware.map((product, index) => (
              <div className="product" key={index}>
                <Image
                  src={product.img}
                  alt={product.name}
                  width={500}
                  height={500}
                  priority="true"
                  layout="intrinsic"
                />
                <div className="detail">
                  <h3>{product.name}</h3>
                  <p>{product.type}</p>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <h2>Software</h2>
          <div className="softwares">
            {software.map((product, index) => (
              <div className="software" key={index}>
                <Image
                  src={product.img}
                  alt={product.name}
                  width={500}
                  height={500}
                  priority="true"
                  layout="intrinsic"
                />
                <div className="detail">
                  <h3>{product.name}</h3>
                  <p>{product.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
