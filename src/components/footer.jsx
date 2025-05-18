import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import discordIcon from "../assets/discord_solid.png";
import linkedInLogo from "../assets/linkedin.png";



export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: logo + text */}
        <div className="footer-left">
          <img
            src={logo}
            alt="Triton Robosub Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <p className="blinker-regular" style={{ margin: 0 }}>
            Triton Robosub
          </p>
        </div>

        {/* Right: social icons */}
        <div className="footer-right footer-social">
          <a
            href="https://instagram.com/tritonrobosub"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="wh8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>

          <a
            href="https://discord.com/invite/N6emXFM5Hq"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
             src={discordIcon}
             alt="Discord"
             className="wh8"
           />
          </a>

          <a
            href="https://www.linkedin.com/school/tritonrobosub/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img
             src={linkedInLogo}
             alt="LinkedIn"
             className="linkedin-img"
           />
          </a>

          <a href="mailto:robosub@ucsd.edu" aria-label="Email">
            <svg
              className="wh8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v2.22l-8 4.88-8-4.88V6zm0 12v-7.03l7.74 4.73c.41.25.91.25 1.32 0L20 10.97V18H4z" />
            </svg>
          </a>

          <a
            href="https://github.com/triton-robosub"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="wh8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.84 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.01-2.13-3.19.7-3.86-1.4-3.86-1.4-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.41-1.26.75-1.55-2.54-.29-5.22-1.27-5.22-5.66 0-1.25.44-2.28 1.17-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.87 10.87 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.2-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.17 1.83 1.17 3.08 0 4.41-2.69 5.37-5.24 5.65.42.36.8 1.06.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.65.79.54A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
