import React from "react";
import "../team.css";
const marketingTeamMembers = [
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

function MarketingTeam() {
  return (
    <div className="team">
      <h1>Marketing</h1>
      <p>
        The business team handles finances, outward relations, and marketing
        tasks.
      </p>
      <a href="marketing" class="routeButton">
        View Marketing Team Page
      </a>
      <div className="team-grid">
        {marketingTeamMembers.map((member, index) => (
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

export default MarketingTeam;
