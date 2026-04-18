import React from "react";
import Home from "./home";
import Bio from "./bio";
import Works from "./work";
import Contact from "./contact";
import "./index.css";

function MainPage() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><Bio /></section>
      <section id="work"><Works /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default MainPage;