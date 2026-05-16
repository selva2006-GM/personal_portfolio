import React from "react";
import "./index.css";

export default function CodingPlatforms() {

  function frameLoaded() {
    document.querySelector(".navbarhider").style.display = "block";
}
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