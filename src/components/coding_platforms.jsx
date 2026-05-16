import React from "react";
import "./index.css";

export default function CodingPlatforms() {

  function frameLoaded() {
    setTimeout(() => {
        window.scrollTo({
              top: 0,
              behavior: "smooth"
          });

        document.querySelector(".navbarhider").style.display = "block";

        document.querySelector(".iframecode").style.display = "block";

    }, 1200); // 1 second
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