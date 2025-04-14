import React from "react";
import "../team.css";
import kaifeng from "../../assets/headshots/kaifeng.png";
import weifung from "../../assets/headshots/weifung.png";
import morgan from "../../assets/headshots/morgan.png";
import rosslyn from "../../assets/headshots/rosslyn.png";

const mechanicalTeamMembers = [
  {
    name: "Weifung Goh",
    specifics: "President",
    linkedin: "https://www.linkedin.com/in/weifunggoh",
    headshot: weifung,
  },
  {
    name: "Morgan Rockwell",
    specifics: "Mechanical Member",
    linkedin: "https://www.linkedin.com/in/morgan-rockwell-64a180354",
    headshot: morgan,
  },
  {
    name: "Rosslyn Farnan",
    specifics: "Mechanical Member",
    linkedin: "https://www.linkedin.com/in/rosslyn-farnan-a9008a300/",
    headshot: rosslyn,
  },
  {
    name: "Kaifeng Chen",
    specifics: "Mechanical Member",
    linkedin: "https://www.linkedin.com/in/kaifeng-chen/",
    headshot: kaifeng,
  }
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

export default MechanicalTeam;
