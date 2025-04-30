import React from "react";
import "./subteams.css";
import "../components/footer.css";
import electricalImage from "../assets/teampics/electrical.jpeg";


function Electrical() {
    return (
        <div>
            <div className="image">
                <h1>Electrical</h1>
                <p>
                Our electrical subteam designs the custom electronics (circuit-design, analog, PCB, etc.)
                and coordinates all the sensors and actuators in our vehicle.
                </p>
            </div>
            <div className="content-container">
                <img src={electricalImage} alt="Electrical Team" className="hi-image" />
                <div className="text">
                <h2>Our Approach</h2>
                <p>wip</p>
                </div>
            </div>
        </div>
    );
}

export default Electrical;
