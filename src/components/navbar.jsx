import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import Data from "./Data";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      // Scenario 1: Not on home page
      navigate("/");
      
      // Wait for navigation to complete before trying to find the element
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 150); 
    } else {
      // Scenario 2: Already on home page
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    };
  return (
    <nav className="navbar">
          <div className="logo">{Data.name}</div>

      <div className="nav-links">
        <button onClick={() => goToSection("home")}>Home</button>
        <button onClick={() => goToSection("about")}>About</button>
        <button onClick={() => goToSection("work")}>Work</button>
        <button onClick={() => goToSection("contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;