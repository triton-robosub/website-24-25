import React from "react";
import "../team.css";
import laalith from "../../assets/headshots/laalith.png";
import andrew from "../../assets/headshots/andrew.png";
import varick from "../../assets/headshots/varick.png";
import max from "../../assets/headshots/max.png";
import andres from "../../assets/headshots/andres.png";

const electricalTeamMembers = [
  {
    name: "Laalith Nalluri",
    specifics: "Electrical Member",
    linkedin: "https://www.linkedin.com/in/andrew-jung-477bbb290",
    headshot: laalith,
  },
  {
    name: "Andrew Jung",
    specifics: "Electrical Member",
    linkedin: "https://www.linkedin.com/in/andrew-jung-477bbb290",
    headshot: andrew,
  },
  {
    name: "Varick Reynaldo",
    specifics: "Electrical Member",
    linkedin: "https://www.linkedin.com/in/varick-reynaldo-932554276?trk=contact-info",
    headshot: varick,
  },
  {
    name: "Max Bayer",
    specifics: "Electrical Member",
    linkedin: "https://www.linkedin.com/in/william-bayer-a1524223a/",
    headshot: max,
  },
  {
    name: "Andres Soto",
    specifics: "Electrical Member",
    linkedin: "https://www.linkedin.com/in/andres-soto-34a479278?trk=contact-info/",
    headshot: andres,
  }
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

export default ElectricalTeam;
