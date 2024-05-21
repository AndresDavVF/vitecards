import React from "react";
import './DeveloperViews.css';

function DevelopersViews({len}){
    return(
        <div className="devvista">
            <h1>{len.nName}</h1>
            <h3>{len.nProfile}</h3>
            <img src={len.nimage} alt={len.nimage+ "image"}/>
        </div>
    )
}

export default DevelopersViews;