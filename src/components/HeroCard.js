import React from "react";
import "./style/card.css"
// import Navbar from "./Navbar"




const HeroCard = (props) => (

    <div onClick={() => props.handleClick(props.id)} className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} height="350px" width="350px" />
        </div>
    </div>
);

export default HeroCard;
