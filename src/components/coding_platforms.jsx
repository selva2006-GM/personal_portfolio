import React, { useEffect, useState } from "react";
import "./index.css";

function StatsCard({
  title,
  username,
  fetchUrl,
  mapData,
  heatmapUrl
}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(fetchUrl);

        if (!res.ok) throw new Error("API failed");

        const json = await res.json();
        setData(mapData(json));
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, [fetchUrl, mapData]);

  if (!data) return <div className="card">Loading...</div>;

  const total = data.total || 1;
return (
  <div className="card">
    <div className="title">
      <span>{username}</span>
      <span>{title}</span>
    </div>

    <div className="big">{data.total}</div>

    {data.breakdown && (
      <div className="stats-container">
        {data.breakdown.map((item, i) => (
          <div key={i} style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="bar-bg">
              <div
                className={`bar ${item.className}`}
                style={{ width: `${(item.value / total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    )}

    {heatmapUrl && (
      <img
        src={heatmapUrl}
        alt="stats heatmap"
        className="heatmap"
      />
    )}
  </div>
);
}

export default function CodingPlatforms() {
  return (
    <div className="cards">

      {/* LeetCode */}
      <StatsCard
        title="LeetCode"
        username="s_selva"
        fetchUrl="https://alfa-leetcode-api.onrender.com/s_selva"
        heatmapUrl="https://leetcard.jacoblin.cool/s_selva?ext=heatmap"
        mapData={(data) => ({
          total: data.totalSolved,
          breakdown: [
            {
              label: "Easy",
              value: data.easySolved,
              className: "easy"
            },
            {
              label: "Medium",
              value: data.mediumSolved,
              className: "medium"
            },
            {
              label: "Hard",
              value: data.hardSolved,
              className: "hard"
            }
          ]
        })}
      />

      {/* GitHub */}
     <StatsCard
  title="GitHub"
  username="selva2006-GM"
  fetchUrl="https://api.allorigins.win/raw?url=https://api.github.com/users/selva2006-GM"
  heatmapUrl="https://github-readme-activity-graph.vercel.app/graph?username=selva2006-GM&theme=github-dark"
  mapData={(data) => ({
    total: data.public_repos,
    breakdown: [
      {
        label: "Followers",
        value: data.followers,
        className: "easy"
      },
      {
        label: "Following",
        value: data.following,
        className: "medium"
      },
      {
        label: "Gists",
        value: data.public_gists,
        className: "hard"
      }
    ]
  })}
/>

    </div>
  );
}