// SponsorsPage.jsx
import React from "react";
import "./sponsors.css";

const SponsorsPage = () => {
  const sponsors = [
    { name: "Sponsor 1" },
    { name: "Sponsor 2" },
    { name: "Sponsor 3" },
    { name: "Sponsor 4" },
    { name: "Sponsor 5" },
  ];

  return (
    <div className="sponsors-container">
      <div className="header-image">
        <h1>Our Sponsors</h1>
        <p>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Dictum dignissim
          quisque sit porta magna nullam facilisis ultrices.
        </p>
      </div>

      <section className="current-sponsors">
        <h1>Current Sponsors</h1>
        <p>
          Triton Robosub thanks all of our current sponsors, who enable us to
          design, create, and participate in the RoboSub competition.
        </p>
        <div className="sponsor-scroll">
          {sponsors.map((sponsor, index) => (
            <div className="sponsor-card" key={index}>
              <div className="profile-placeholder"></div>
              <h2>{sponsor.name}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="support-us">
        <h1>Interested in supporting us?</h1>
        <p>
          With your support, we can continue to improve our designs, give our
          members the tools they need to learn and grow, and use our knowledge
          to give back to the robotics community at large.
        </p>
        <p>
        To donate to Triton Robosub, follow <a href="https://giveto.ucsd.edu/giving/home/add-gift" 
            className="donation-link" target="_blank" rel="noopener noreferrer">this 
            link</a> to UC San Diego's donation page.
          Once there, search for "Triton Robosub" under "Search
          for more giving options..." then select our team and a donation amount.
          For partnerships and other donations, please contact us at
          robosub@ucsd.edu.
        </p>
      </section>
    </div>
  );
};

export default SponsorsPage;