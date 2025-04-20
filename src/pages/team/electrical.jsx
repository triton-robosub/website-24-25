import React from "react";
import "../team.css";
const electricalTeamMembers = [
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
  {
    name: "Irene Joo",
    major: "Major",
    gradYear: "Grad Year",
    specifics: "Team Specifics",
  },
];

function ElectricalTeam() {
  return (
    <div className="team">
      <h1>Electrical</h1>
      <p>
        The electrical team designs and solders custom boards that power the sub
        and process signals from onboard sensors.
      </p>
      <a href="electrical" class="routeButton">
        View Electrical Team Page
      </a>
      <div className="team-grid">
        {electricalTeamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="profile-placeholder"></div>
            <div className="text">
              <h2>{member.name}</h2>
              <p>
                {member.major}, {member.gradYear}
              </p>
              <p className="role">{member.specifics}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElectricalTeam;
