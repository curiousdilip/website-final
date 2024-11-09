import React from "react";
import { timeline } from "../data";
import "./timeline.css";
const TimeLine = () => {
  return (
    <div>
      <ul className="timeline">
        {timeline.map((item, index) => (
          <li key={index}>
            <h4 className="day"> {item.day}</h4>
            <p>
              {item.description}{" "}
              <a href={item.link} target="_blank">
                {item.projectName}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
