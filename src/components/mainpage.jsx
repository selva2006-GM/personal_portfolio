import React from "react";
import Home from "./home";
import Bio from "./bio";
import Works from "./work";
import Contact from "./contact";
import "./index.css";

function MainPage({data}) {
  return (
    <>
          <section id="home"><Home home={data.home} /></section>
          <section id="about"><Bio bio={data.bio} /></section>
      <section id="work"><Works/></section>
          <section id="contact"><Contact contact={data.contact} /></section>
    </>
  );
}

export default MainPage;