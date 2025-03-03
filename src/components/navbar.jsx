import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <div className="logo-flex-container">
                        <Link to="/" className="logo-flex-box">
                            <img
                                src={logo}
                                alt="logo"
                                className="circle-logo"
                            />
                            <h4 className="oxanium-semibold team-name">
                                Triton Robosub
                            </h4>
                        </Link>
                    </div>
                </li>
                <li className="dropdown">
                    <Link to="/about" className="blinker-regular">
                        about
                    </Link>
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/alumni" className="blinker-regular">
                                alumni
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" className="blinker-regular">
                                meet the team
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="/auv" className="blinker-regular">
                        auv
                    </Link>
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/overview" className="blinker-regular">
                                overview
                            </Link>
                        </li>
                        <li>
                            <Link to="/electrical" className="blinker-regular">
                                electrical
                            </Link>
                        </li>
                        <li>
                            <Link to="/mechanical" className="blinker-regular">
                                mechanical
                            </Link>
                        </li>
                        <li>
                            <Link to="/software" className="blinker-regular">
                                software
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/blog" className="blinker-regular">
                        {" "}
                        blog{" "}
                    </Link>
                </li>
                <li>
                    <Link to="/alumni" className="blinker-regular">
                        {" "}
                        alumni{" "}
                    </Link>
                </li>
                <li>
                    <Link to="/sponsors" className="blinker-regular">
                        {" "}
                        sponsors{" "}
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="blinker-regular">
                        {" "}
                        contact us{" "}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
