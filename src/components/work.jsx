import React from "react";
import {Link } from "react-router-dom";
import "./index.css";


function Work({ tit, link }) {
    return (
        <div className="work">
            <Link to={link} >
                <h1>{tit}</h1>
            </Link>
        </div>
    );
}
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiJavascript, SiMongodb, SiRedis, SiPostgresql, SiC } from "react-icons/si";
function Language({ className }) {
    return (
        <div className={className}>
            <h1>Skills</h1>

            <div className="skill-section">
                <h2>💻 Programming</h2>
                <div className="icons">
                    <FaPython />
                    <FaJava />
                    <SiC />
                    <SiCplusplus />
                    <SiJavascript />
                </div>
            </div>

            <div className="skill-section">
                <h2>🌐 Web</h2>
                <div className="icons">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaReact />
                </div>
            </div>

            <div className="skill-section">
                <h2>🗄️ DBMS</h2>
                <div className="icons">
                    <SiMysql />
                    <SiPostgresql />
                    <SiMongodb />
                    <SiRedis />
                </div>
            </div>
        </div>
    );
}



export default function Works(){
    return (
        <div className="works">
            <Work tit="coding platforms" link="/coding-platforms" />
            <Work tit="web Projects" link="/websites" />
            <Work tit="hardware project" link="https://example.com" />
            <Work tit="blog" link="/blog" />

            <Language className="language-box"/>
        </div>

    );
}