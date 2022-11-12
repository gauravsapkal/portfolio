import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./skills.css";
import { ThemeContext } from "../../../Context/theme";
// import { ThemeContext } from "../../contexts/ThemeContext";
// import { skillsData } from "../../data/skillsData";


import { skillsImage } from "./data/skillsImage";
const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "Redux",
    "Node JS",
    "Bootstrap",
    "MaterialUI",
    "Postman",
    "Git",
    "Data Structures"
    // "Chakra-UI"
  ];
function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    // backgroundColor: theme.secondary,
    // boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div
      className="skills"
      id="skills"
      // style={{ backgroundColor: theme.secondary }}
    >
      <div className="skillsHeader">
        {/* <h2 style={{ color: theme.primary }}>Skills</h2> */}
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                {/* <h3 style={{ color: theme.tertiary }}>{skill}</h3> */}
                 <h3>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;