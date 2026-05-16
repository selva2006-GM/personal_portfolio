import React from "react";
import "./index.css";

export default function CodingPlatforms() {
  return (
    <div className="coding_platform">
      <div className = "navbarhider"></div>
      <div className="iframe-wrapper">
        <iframe
          className="iframecode"
          src="https://codolio.com/profile/ganesh2006"
          title="Codolio"
        ></iframe>

        {/* click blocker */}
        <div className="iframe-overlay"></div>
      </div>
    </div>
  );
}