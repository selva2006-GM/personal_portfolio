import React from "react";

export default function Blog() {
  const list = [
    {
      name: "Disappear to Evolve",
      link: "https://smylifeinearth.blogspot.com/2025/10/disappear-to-evolve-power-of-going.html"
    },
    {
        name: "",
        link: "https://smylifeinearth.blogspot.com/2025/05/grades-are-just-numbers.html"
    },
    {
        name:"",
        link:"https://smylifeinearth.blogspot.com/2022/01/the-beginning-to-success.html"
    }
  ];

  return (
    <div className="blog-wrapper">
      {list.map((item, index) => (
        <div className="icontainer" key={index}>
          <iframe
            className="iframe"
            src={item.link}
            title={item.name}
          ></iframe>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="iframe-overlay"
          >
            Open Blog ↗
          </a>
        </div>
      ))}
    </div>
  );
}