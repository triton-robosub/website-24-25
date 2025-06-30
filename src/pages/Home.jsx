import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../components/footer.css";
import placeholder from "../assets/placeholder.png";

function Home() {
  return (
    <div className="home-container">
      <div className="header-image">
         <div className="header-content">
            <h1>Welcome to Triton Robosub</h1>
            <p>
          <strong>Triton Robosub</strong> is a underwater robotics team at UC San Diego.<br />
          Our team was established for and debuted at Robosub 2019,<br />
          during which we reached the semi-final stage of the competition.
        </p>
           <a href="https://discord.gg/FmR7JbFdAV" target="_blank" rel="noreferrer" className="yellow-button">Join our Discord</a>
        </div>
      </div>

      <section className="about-section">
        <div className="about-container">
          <img src={placeholder} alt="Scored board" className="about-image" />
          <div className="about-text">
            <h2>About Robosub</h2>
            <p>
              Robosub is an international competition held annually by RoboNation
              at the TRANSDEC pool in San Diego. Teams from around the world test
              their autonomous underwater vehicles (AUVs) in a series of challenges.
            </p>
            <Link to="/team" className="yellow-button">Meet the Team</Link>
          </div>
        </div>
      </section>

      


      
      <section className="auv-section">
        <div className="auv-container">
          <div className="auv-text">
            <h2>Our AUVs</h2>
            <p>
              Our AUVs are designed with care by our multi-disciplinary team to
              perform exceptionally at the annual Robosub competition. We are
              always looking to improve our platforms by utilizing the latest
              technologies in fields such as machine learning.
            </p>
            <Link to="/auv" className="yellow-button">Learn more</Link>
          </div>
          <img src={placeholder} alt="AUV" className="auv-image" />
        </div>
      </section>

      <section className="cards-section">
        <div className="card">
          <div className="card-body">
            <img src={placeholder} alt="Team goals" />
            <h2>Our Goals</h2>
            <p>
              Triton Robosub leverages UCSD’s strengths in robotics, engineering, and
              oceanography. We plan on establishing UCSD as a top competitor at Robosub.
              With your help, we can make it happen!
            </p>
          </div>
          <Link to="/sponsors" className="yellow-button">Learn how to support us</Link>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={placeholder} alt="Team club" />
            <h2>More Than Just a Club</h2>
            <p>
              We actively search for local organizations to collaborate with and find
              real world applications for the systems we develop. We also provide
              outreach for local communities to encourage their involvement in STEM and
              robotics.
            </p>
          </div>
          <Link to="/contact" className="yellow-button">Connect with us</Link>
        </div>
      </section>
      
    </div>
  );
}

export default Home;
