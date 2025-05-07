import React from "react";
import "../team.css";
import darin from "../../assets/headshots/darin.png";
import ali from "../../assets/headshots/ali.jpeg";
import weston from "../../assets/headshots/weston.png";
import phylicia from "../../assets/headshots/phylicia.png";
import david from "../../assets/headshots/david.png";
import edward from "../../assets/headshots/edward.png";
import ayush from "../../assets/headshots/ayush.png";
import aditi from "../../assets/headshots/aditi.png";
import samuel from "../../assets/headshots/samuel.png";
import vishrut from "../../assets/headshots/vishrut.png";
import veeral from "../../assets/headshots/veeral.png";
import alyssia from "../../assets/headshots/alyssia.png";
import kate from "../../assets/headshots/kate.png";
import nathan from "../../assets/headshots/nathan.png";

const softwareTeamMembers = [
  {
    name: "Vishrut Guggilla",
    specifics: "Co-President",
    linkedin: "www.linkedin.com/in/vishrut-g",
    headshot: vishrut,
  },
  {
    name: "Darin Djapri",
    specifics: "Software Team Lead",
    linkedin: "https://www.linkedin.com/in/darin-djapri-a91143214/",
    headshot: darin,
  },
  {
    name: "Edward Huang",
    specifics: "Simulations Lead",
    linkedin: "https://www.linkedin.com/in/edward-huang-sd/",
    headshot: edward,
  },
  {
    name: "Phylicia Wang",
    specifics: "Web Development Lead",
    linkedin: "https://www.linkedin.com/in/phlcia/",
    headshot: phylicia,
  },
  {
    name: "Ayush Singhal",
    specifics: "Localization Lead",
    linkedin: "https://www.linkedin.com/in/ayushsinghal7",
    headshot: ayush,
  },
  {
    name: "Ali El Lahib",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/ali-ellahib/",
    headshot: ali,
  },
  {
    name: "Weston Zong",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/weston-zong/",
    headshot: weston,
  },
  {
    name: "Kate Wang",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/kate-wang-174593244/",
    headshot: kate,
  },
  {
    name: "David Hong",
    specifics: "Software Member",
    linkedin: "https://linkedin.com/in/djhong1",
    headshot: david,
  },
  {
    name: "Aditi Bansal",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/aditi-bansal-b40731299/",
    headshot: aditi,
  },
  {
    name: "Samuel Lin",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/ying-jia-lin/",
    headshot: samuel,
  },
  {
    name: "Alyssia Almanza",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/alyssiama",
    headshot: alyssia,
  },
  {
    name: "Veeral Patel",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/veeral-patel/",
    headshot: veeral,
  },
  {
    name: "Nathan Natsuta",
    specifics: "Software Member",
    linkedin: "https://www.linkedin.com/in/nathan-tatsuta-934a1227a/",
    headshot: nathan,
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
      <a href="software" className="routeButton">
        View Software Team Page
      </a>
      <div className="team-grid">
        {softwareTeamMembers.map((member, index) => (
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

export default SoftwareTeam;