import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Data from "./Data";

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

import { FaCode } from "react-icons/fa";

function Work({ tit, link }) {
    return (
        <div className="work">
            <Link to={link}>
                <h1>{tit}</h1>
            </Link>
        </div>
    );
}

// special icon fixes
const customIcons = {
    "C++": SiIcons.SiCplusplus,
    "C#": SiIcons.SiSharp,
    PostgreSQL: SiIcons.SiPostgresql,
    MySQL: SiIcons.SiMysql,
    MongoDB: SiIcons.SiMongodb,
    Redis: SiIcons.SiRedis,
    JavaScript: SiIcons.SiJavascript,
    React: FaIcons.FaReact,
    HTML5: FaIcons.FaHtml5,
    CSS3: FaIcons.FaCss3Alt,
    Python: FaIcons.FaPython,
    Java: FaIcons.FaJava,
    C: SiIcons.SiC,
};

function getIcon(skill) {

    // check custom icons first
    if (customIcons[skill]) {
        return customIcons[skill];
    }

    // remove spaces and symbols
    const formatted = skill
        .replace(/\s+/g, "")
        .replace(/\./g, "")
        .replace(/\#/g, "Sharp")
        .replace(/\+\+/g, "plusplus");

    // possible icon names
    const siName = "Si" + formatted;
    const faName = "Fa" + formatted;

    return (
        SiIcons[siName] ||
        FaIcons[faName] ||
        FaCode
    );
}

function Language({ className }) {
    return (
        <div className={className}>
            <h1>Skills</h1>

            {Object.entries(Data.skills).map(([category, skills]) => (
                <div className="skill-section" key={category}>

                    <h2>
                        {category === "programming" && "💻 Programming"}
                        {category === "web" && "🌐 Web"}
                        {category === "dbms" && "🗄️ DBMS"}
                    </h2>

                    <div className="icons">

                        {skills.map((skill) => {

                            const Icon = getIcon(skill);

                            return (
                                <div className="icon-box" key={skill}>
                                    <Icon />
                                  
                                </div>
                            );
                        })}

                    </div>
                </div>
            ))}
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