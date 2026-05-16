import React from "react";
import "./index.css";
function Ownwebsites() {
  const list = [
    {
      name: "Portfolio",
      link: "https://portfolio-mu-dusky-voqps6b9ep.vercel.app/"
    },
    {
      name: "Number Converter",
      link: "https://number-converter-app.vercel.app/"
    },
    {
      name: "Movies Search",
      link: "https://movies-search-lovat.vercel.app/"
    },
    {
      name: "Real Time Chat App",
      link: "https://freechatroom-production.up.railway.app/"
    },
    {
      name: "Authentication in Flask",
      link: "https://authentication-in-flask-production.up.railway.app/"
    },
    {
      name: "github",
      link: "https://github.com/selva2006-GM"
    }
  ];

  return (
    <div className="websites">
      {list.map((item, index) => (
        
        <div className="icontainer" key={index}>
          <iframe className="iframe"
            src={item.link}
            title={item.name}
            scrolling="no"
          ></iframe>

          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="iframe-overlay"
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default function Websites() {
  return (
    <div className="website">
      <Ownwebsites />
    </div>
  );
}