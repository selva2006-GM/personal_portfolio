import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Data from "./Data";

import {
    FaCode,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaJava
} from "react-icons/fa";

import {
    SiCplusplus,
    SiSharp,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiJavascript,
    SiC
} from "react-icons/si";


function Work({ tit, link }) {
    return (
        <div className="work">
            <Link to={link}>
                <h1>{tit}</h1>
            </Link>
        </div>
    );
}


const skillIcons = {
    "C++": SiCplusplus,
    "C#": SiSharp,
    "PostgreSQL": SiPostgresql,
    "MySQL": SiMysql,
    "MongoDB": SiMongodb,
    "Redis": SiRedis,
    "JavaScript": SiJavascript,
    "React": FaReact,
    "HTML5": FaHtml5,
    "CSS3": FaCss3Alt,
    "Python": FaPython,
    "Java": FaJava,
    "C": SiC
};


function getIcon(skill) {
    return skillIcons[skill] || FaCode;
}


function Language({ className }) {
    return (
        <div className={className}>
            <h1>Skills</h1>

            {Object.entries(Data.skills).map(
                ([category, skills]) => (
                    <div
                        className="skill-section"
                        key={category}
                    >
                        <h2>
                            {category === "programming" &&
                                "💻 Programming"}

                            {category === "web" &&
                                "🌐 Web"}

                            {category === "dbms" &&
                                "🗄️ DBMS"}
                        </h2>

                        <div className="icons">
                            {skills.map((skill) => {
                                const Icon =
                                    getIcon(skill);

                                return (
                                    <div
                                        className="icon-box"
                                        key={skill}
                                    >
                                        <Icon />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}


export default function Works() {
    return (
        <div className="works">
            {Data.works.map((work, index) => (
                <Work
                    key={index}
                    tit={work.title}
                    link={work.link}
                />
            ))}

            <Language className="language-box" />
        </div>
    );
}