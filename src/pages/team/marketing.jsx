import React from "react";
import "../team.css";
import darin from "../../assets/headshots/darin.png";

const marketingTeamMembers = [
  {
    name: "Darin Djapri",
    specifics: "Software Team Lead",
    linkedin: "https://www.linkedin.com/in/darin-djapri-a91143214/",
    headshot: darin,
  }
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
          <img
            src={member.headshot}
            alt={`${member.name}'s headshot`}
            className="headshot"
          />
          <div className="text">
          <h2>{member.name}</h2>
            <p className="role">{member.specifics}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              <i className="fab fa-linkedin" style={{ marginRight: "6px" }}></i>
              LinkedIn
            </a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingTeam;
