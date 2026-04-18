import React, { useState, useEffect } from "react";
import Bio from "./bio";
import "./index.css";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate movement
  const moveRight = offset * 1;

  return (
    <section
      style={{
        // Combine your transforms into one property
        transform: `translateX(${moveRight}px)`,
        transition: "transform 0.1s linear" // Fixed the key name from 'transform' to 'transition'
      }}
      className="Home"
      id="home" // Added id so your Navbar can find it
    >
      <img src="/images/personalphoto.png" alt="personal" id="personalphoto" />
      <div id="greeting" className="cursor typewriter-animation">
        Hi! I am S selva ganesh
      </div>
    </section>
  );
}