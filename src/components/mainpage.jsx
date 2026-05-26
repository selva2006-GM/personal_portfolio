import React from "react";
import Home from "./home";
import Bio from "./bio";
import Works from "./work";
import Contact from "./contact";
import "./index.css";
import Data from "./Data";


function MainPage() {
  return (
    <>
          <section id="home"><Home home={Data.home} /></section>
          <section id="about"><Bio bio={Data.bio} /></section>
          <section id="work"><Works datalinks ={ Data} /></section>
          <section id="contact"><Contact contact={Data.contact} /></section>
    </>
  );
}

export default MainPage;