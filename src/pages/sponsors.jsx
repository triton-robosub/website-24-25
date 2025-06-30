// JavaScript + CSS-based infinite scroll (JSX controls if animation runs)
import React, { useMemo, useEffect, useState } from "react";
import "./sponsors.css";

import googleLogo from "../assets/sponsors/google.png";

const SponsorsPage = () => {
  const sponsors = [
    { name: "Sponsor 1", img: "https://via.placeholder.com/300x150" },
    { name: "Sponsor 2", img: "https://via.placeholder.com/300x150" },
    { name: "Sponsor 3", img: "https://via.placeholder.com/300x150" },
    { name: "Sponsor 4", img: "https://via.placeholder.com/300x150" },
    { name: "Sponsor 5", img: "https://via.placeholder.com/300x150" },
  ];

  const repeatedSponsors = useMemo(() => [...sponsors, ...sponsors], [sponsors]);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="sponsors-container">
      <div className="header-image">
        <h1>Our Sponsors</h1>
        <p>
          We are grateful for the generous support of our sponsors who make our underwater robotics projects possible. Their contributions enable us to compete, innovate, and advance the field of autonomous underwater vehicles.
        </p>
      </div>

      <section className="current-sponsors">
        <h1>Current Sponsors</h1>
        <p>
          Triton Robosub thanks all of our current sponsors,
          who enable us to design, create, and participate in the RoboSub competition.
        </p>

        <div className="sponsor-scroll-wrapper">
          <div
            className="slider"
            style={{
              "--height": "320px",
              "--width": "280px",
              "--quantity": repeatedSponsors.length,
            }}
          >
            <div className="list">
              {repeatedSponsors.map((sponsor, index) => (
                <div
                  className={`item ${isPaused ? "paused" : "running"}`}
                  key={index}
                  style={{ "--position": index + 1 }}
                >
                  <div className="sponsor-card">
                    <div className="profile-placeholder">
                      <img
                        src={sponsor.img}
                        alt={sponsor.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                    <h2>{sponsor.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="support-us">
        <h1>Interested in supporting us?</h1>
        <p>
          With your support, we can continue to improve our designs,
          give our members the tools they need to learn and grow,
          and use our knowledge to give back to the robotics community at large.
        </p>
        <p>
          To donate to Triton Robosub, follow{" "}
          <a
            href="https://giveto.ucsd.edu/giving/home/add-gift"
            className="donation-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            this link
          </a>{" "}
          to UC San Diego's donation page.
        </p>
      </section>
    </div>
  );
};

export default SponsorsPage;
