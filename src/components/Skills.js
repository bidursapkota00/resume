import React from "react";
import "../styles/Skills.css";
import { useSelector } from "react-redux";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeperators";

const Skills = () => {
  let person = null;
  person = useSelector((state) => state.fetch.person);
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="my-skills">
        {person.skills.map((skill) => {
          const percentage = skill.percentage;
          return (
            <div className="skill">
              <div className="cir">
              <CircularProgressbarWithChildren
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={12}
                  style={{
                    background: "#fff",
                    width: "2px",
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
              </div>
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
