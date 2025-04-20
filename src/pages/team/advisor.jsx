import React from "react";
import "../team.css";
const AdvisorInfo = {
  name: "Irene Joo",
  major: "Major",
  gradYear: "Grad Year",
  specifics: "Team Specifics",
};
function Advisor() {
  return (
    <div className="advisor-grid">
      <div className="info">
        <h1>Advisor</h1>
        <p>Description</p>
      </div>

      <div className="team-member">
        <div className="profile-placeholder"></div>
        <div className="text">
          <h2>{AdvisorInfo.name}</h2>
          <p>
            {AdvisorInfo.major}, {AdvisorInfo.gradYear}
          </p>
          <p className="role">{AdvisorInfo.specifics}</p>
        </div>
      </div>
    </div>
  );
}
export default Advisor;
