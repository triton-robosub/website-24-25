import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-box">
                    <img src={logo} alt="logo" style={{ height:"50px", width: "50px"}} />
                </div>
                <div className="footer-box">
                    <div className="footer-location">
                        <div className = "loc">
                            <p className="blinker-regular" style={{ color: "white" }}>CSE 2127 Kastner Lab</p>
                        </div>
                        <div className = "loc">
                            <p className="blinker-regular" style={{ color: "white" }}>3235 Voigt Dr, La Jolla, CA 92093</p>
                        </div>
                    </div>
                </div>
                <div className="footer-box footer-social white">
                    <a
                        href="https://instagram.com/tritonrobosub"
                        aria-label="instagram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="wh8"
                        >
                            <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </a>
                    <a
                        href="https://discord.com/invite/N6emXFM5Hq"
                        aria-label="discord"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 245 240"
                            fill="currentColor"
                            className="wh8"
                        >
                            <path d="M104.4 20.8C72.5 26.2 47.6 45.7 32.7 73c-14.9 27.3-19.8 61.7-13.3 93.2 6.5 31.5 24.1 60.7 49.2 81.2a138.7 138.7 0 0 0 76.7 28.1c12.3 1.1 25-.2 37.1-3.8 12.1-3.7 23.6-9.4 33.8-16.7a142.7 142.7 0 0 0 29.3-28.5c1.8-2.3 1.1-5.4-1.3-7.2l-28.6-21.3c-2.4-1.8-5.8-1.4-7.7.8a84.2 84.2 0 0 1-21.6 18.4c-1.2.8-2.8.5-3.8-.6l-6.8-7c-2.8-3-5.4-6.1-7.8-9.3-2.4-3.1-4.8-6.4-7-9.8a84.4 84.4 0 0 1-7.6-13.4 96 96 0 0 0 29.3-3.6c6.2-1.7 11.7-5 16.2-9.6 4.5-4.5 7.6-10 9.2-15.9 1.7-6 1.7-12.3 0-18.2-1.6-5.9-4.7-11.3-9.2-15.8-4.5-4.5-10-7.7-16.1-9.3a95.8 95.8 0 0 0-29.5-3.5h-4.6c-8.3-1.4-16.9-1.4-25.2 0h-4.4a95.8 95.8 0 0 0-29.6 3.6c-6.2 1.7-11.6 5-16.1 9.6-4.4 4.5-7.6 10-9.2 15.9a36.6 36.6 0 0 0 0 18.2c1.6 6 4.7 11.3 9.2 15.8 4.4 4.5 9.9 7.7 16.2 9.3 9.3 2.5 18.9 3.7 28.5 3.6a84.4 84.4 0 0 1-7.5 13.4c-2.3 3.4-4.7 6.6-7 9.8a109.6 109.6 0 0 1-7.7 9.2l-6.7 6.9c-1 1-2.6 1.4-3.8.6a84.2 84.2 0 0 1-21.6-18.3c-1.8-2.2-5.3-2.5-7.7-.8l-28.6 21.3c-2.4 1.8-3 4.9-1.3 7.2a142.7 142.7 0 0 0 29.3 28.5c10.2 7.3 21.6 13 33.8 16.7 12.1 3.7 24.8 4.9 37.1 3.8a138.7 138.7 0 0 0 76.7-28.1c25.1-20.5 42.7-49.7 49.2-81.2 6.5-31.5 1.6-65.9-13.3-93.2-14.9-27.3-39.8-46.8-71.7-52.2-22.1-3.9-44.8-2.6-66 3.5z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/school/tritonrobosub/"
                        aria-label="linkedin"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="wh8"
                        >
                            <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5zM3 8h4v12H3zm7.12-3.5h3.78c.31 0 .56.25.56.56v1.5a4.67 4.67 0 0 1 4.03-2.06c2.6 0 4.62 2.18 4.62 5.08v7.92h-4v-7.34c0-.79-.67-1.43-1.5-1.43-1.16 0-2 .85-2 2.14v6.63h-4v-12h4z" />
                        </svg>
                    </a>
                    <a href="mailto:robosub@ucsd.edu" aria-label="email">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="wh8"
                        >
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v2.22l-8 4.88-8-4.88V6zm0 12v-7.03l7.74 4.73c.41.25.91.25 1.32 0L20 10.97V18H4z" />
                        </svg>
                    </a>
                    <a href="https://github.com/triton-robosub" aria-label="github">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="wh8"
                        >
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.84 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.01-2.13-3.19.7-3.86-1.4-3.86-1.4-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.41-1.26.75-1.55-2.54-.29-5.22-1.27-5.22-5.66 0-1.25.44-2.28 1.17-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.87 10.87 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.2-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.17 1.83 1.17 3.08 0 4.41-2.69 5.37-5.24 5.65.42.36.8 1.06.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.65.79.54A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
