import React from "react";
import MechanicalTeam from "./mechanical";
import ElectricalTeam from "./electrical";
import SoftwareTeam from "./software";
import MarketingTeam from "./marketing";
import Advisor from "./advisor";
import "../team.css";
function Team() {
  return (
    <div className>
      <div className="image">
        <h1>Meet the Team</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum dignissim
          quisque sit porta magna nullam facilisis ultrices.
        </p>
      </div>

      <div>
        <MechanicalTeam />
        <ElectricalTeam />
        <SoftwareTeam />
        <MarketingTeam />
        <Advisor />
      </div>
    </div>
  );
}

export default Team;
