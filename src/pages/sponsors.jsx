import React from "react";
import "./sponsors.css";

function Sponsors() {
    return (
        <div>
            <div className>
                <div className="image">
                    <h1> Current Sponsors</h1>
                    <p>
                    Triton Robosub thanks all of our current sponsors, who
                    enable us to design create, and participate in the RoboSub
                    competition.
                    </p>
                </div>
            </div>

            <div classname= "sponsors-list">
                <SponsorsList />
            </div>
        </div>
    );
}

export default Sponsors;
