import React from "react"
import "./index.css";
export default function Bio({ bio }){
    return (
        <div className = "Bio">
            <div className="frame">
                <h1>{bio.title}</h1>
                <p id="bio">
                {bio.description}
               </p>
            </div>
        </div>
    )
}