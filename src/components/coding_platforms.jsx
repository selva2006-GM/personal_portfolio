import React from "react";
import "./index.css";

export default function CodingPlatforms() {

function frameLoaded() {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    document.querySelector(".iframecode").style.display = "block";

    // Only show navbarhider on large screens
    const navbarHider = document.querySelector(".navbarhider");

if (navbarHider) {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    navbarHider.style.display = "block";
  } else {
    navbarHider.style.display = "none";
  }
}
  }, 1200);
}
function handleNavbarHider() {
  const navbarHider = document.querySelector(".navbarhider");

  if (!navbarHider) return;

  if (window.matchMedia("(min-width: 768px)").matches) {
    navbarHider.style.display = "block";
  } else {
    navbarHider.style.display = "none";
  }
}

/* Run initially */


/* Run whenever screen resizes */
window.addEventListener("resize", handleNavbarHider);
  return (
    <div className="coding_platform">
      <div className = "navbarhider"></div>
      <div className="iframe-wrapper">
        <iframe
          className="iframecode"
          src="https://codolio.com/profile/ganesh2006" 
          title="Codolio"
           scrolling="no"
           onLoad={frameLoaded}
        ></iframe>

        {/* click blocker */}
        <div className="iframe-overlay"></div>
      </div>
    </div>
  );
}
