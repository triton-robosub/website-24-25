import React from "react";
import "./subteams.css";
import "../components/footer.css";
import mechanicalImage from "../assets/teampics/mechanical.jpg";

function Mechanical() {
    return (
        <div>
            <div className="image">
                <h1>Mechanical</h1>
                <p>
                Our Mechanical subteam builds the vehicle frame and also conducts
                        fluid-dynamic testing, sensor placement, simulations, and more.
                </p>
            </div>
            <div className="content-container">
                <img src={mechanicalImage} alt="Mechanical Team" className="hi-image" />
                <div className="text">
                <h2>Our Approach</h2>
                <p>wip</p>
                </div>
            </div>
        </div>
    );
}

export default Mechanical;
