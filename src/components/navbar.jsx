import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar2 = () => {
    return (
        <nav>
            <div className="navbar-left">
                Triton Robosub
            </div>
            <ul>
                <li className="dropdown">
                    <Link to="/about">about</Link>
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/alumni">alumni</Link>
                        </li>
                        <li>
                            <Link to="/team">meet the team</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="/auv"> auv</Link>
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/overview">overview</Link>
                        </li>
                        <li>
                            <Link to="/electrical">electrical</Link>
                        </li>
                        <li>
                            <Link to="/mechanical">mechanical</Link>
                        </li>
                        <li>
                            <Link to="/software">software</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/blog"> blog </Link>
                </li>
                <li>
                    <Link to="/alumni"> alumni </Link>
                </li>
                <li>
                    <Link to="/sponsors"> sponsors </Link>
                </li>
                <li>
                    <Link to="/contact"> contact us </Link>
                </li>
            </ul>
        </nav>
    );
};
