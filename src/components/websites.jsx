import React, { useState } from "react";

import "./index.css";

function Ownwebsites() {
  const [activeSite, setActiveSite] = useState(null);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const list = [
    {
      name: "Portfolio",
      link: "https://portfolio-mu-dusky-voqps6b9ep.vercel.app/",
    },
    {
      name: "Number Converter",
      link: "https://number-converter-app.vercel.app/",
    },
    {
      name: "Movies Search",
      link: "https://movies-search-lovat.vercel.app/",
    },
    {
      name: "Real Time Chat App",
      link: "https://free-chat-room-ihga.onrender.com/",
    },
    {
      name: "Authentication in Flask",
      link: "https://authentication-in-flask.onrender.com/",
    },
    {
      name: "Personal Portfolio",
      link: "https://personal-portfolio-one-lac-96.vercel.app/"
  ];


  React.useEffect(() => {
      const handleBack = () => {
        setActiveSite(null);
      };

      window.addEventListener("popstate", handleBack);

      return () => {
        window.removeEventListener("popstate", handleBack);
      };
    }, []);

  return (
    <>
      <div className={`websites ${activeSite ? "hide-grid" : ""}`}>
        {list.map((item, index) => (
          <div className="icontainer" key={index}>
            <iframe
              className="iframe"
              src={item.link}
              title={item.name}
              scrolling="no"
            ></iframe>

            <div className="card-actions">
            <button
              className="open-btn"
              title="Open in New Tab"
              onClick={() => window.open(item.link, "_blank")}
            >
              Open
            </button>

            <button
              className="play-btn"
              title="Preview Website"
              onClick={() => {
                window.history.pushState({ fullscreen: true }, "");
                setActiveSite(item);
              }}
            >
              View
            </button>
          </div>
          </div>
        ))}
      </div>

      {activeSite && (
        <div className="fullscreen-view">
          <div className="fullscreen-header">
            <h2>{activeSite.name}</h2>

            <button
              type="button"
              className="minimize-btn"
              onClick={() => {
                window.history.back();
              }}
            >
              ←
            </button>
          </div>

          <iframe
            className="fullscreen-iframe"
            src={activeSite.link}
            title={activeSite.name}
          ></iframe>
        </div>
      )}
    </>
  );
}

export default function Websites() {
  return (
    <div className="website">
      <Ownwebsites />
    </div>
  );
}
