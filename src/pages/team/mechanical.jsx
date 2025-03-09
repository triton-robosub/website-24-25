import React from "react";
import "../team.css";
const mechanicalTeamMembers = [
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

function MechanicalTeam() {
  return (
    <div className="team">
      <h1>Mechanical</h1>
      <p>
        The mechanical team is tasked with designing, building, and testing all
        of the hardware components of the submarine.
      </p>
      <a href="mechanical" class="routeButton">
        View Mechanical Team Page
      </a>
      <div className="team-grid">
        {mechanicalTeamMembers.map((member, index) => (
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

export default MechanicalTeam;
