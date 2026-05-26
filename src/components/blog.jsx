import React, { useState, useEffect } from "react";

import Data from "./Data";

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState(null);

  window.scrollTo({
    top:0,
    behavior: "smooth"});
  
  useEffect(() => {
    const handleBack = () => {
      setActiveBlog(null);
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  const list =  Data.blogs;

  return (
    <>
    <div className = "blog-wrapperer">
      <div className={`blog-wrapper ${activeBlog ? "hide-grid" : ""}`}>
        {list.map((item, index) => (
          <div className="icontainer" key={index}>
            <iframe
              className="iframe"
              src={item.link}
              title={item.name}
              scrolling="no"
            ></iframe>

            <div className="blog-content">
              <h3>{item.name}</h3>

              <div className="card-actions">
                <button
                  className="open-btn"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  Open
                </button>

                <button
                  className="play-btn"
                  onClick={() => {
                    window.history.pushState(
                      { fullscreen: true },
                      ""
                    );

                    setActiveBlog(item);
                  }}
                >
                  Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeBlog && (
        <div className="fullscreen-view">
          <div className="fullscreen-header">
            <h2>{activeBlog.name}</h2>

            <button
              className="minimize-btn"
              onClick={() => window.history.back()}
            >
              ←
            </button>
          </div>

          <iframe
            className="fullscreen-iframe"
            src={activeBlog.link}
            title={activeBlog.name}
          ></iframe>
        </div>
      )}
      </div>
    </>
  );
}