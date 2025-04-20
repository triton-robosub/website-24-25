import React from "react";
import "../team.css";
const softwareTeamMembers = [
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

function SoftwareTeam() {
  return (
    <div className="team">
      <h1>Software</h1>
      <p>
        The software team is in charge of creating the tools for the submarine
        to perform autonomous missions quickly and efficiently.
      </p>
      <a href="software" class="routeButton">
        View Software Team Page
      </a>
      <div className="team-grid">
        {softwareTeamMembers.map((member, index) => (
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

export default SoftwareTeam;
