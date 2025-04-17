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
          From hardware to code to creativity — meet the people powering our 2024-2025 Robosub!
        </p>
      </div>

      <div>
        <MechanicalTeam />
        <ElectricalTeam />
        <SoftwareTeam />
        {/* <MarketingTeam /> */}
      </div>
    </div>
  );
}

export default Team;
