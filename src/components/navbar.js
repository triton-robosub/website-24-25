import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="../index.html">
                        <img
                            src="../images/logotransparent.png"
                            alt="Triton Robosub Logo"
                        />
                    </a>
                </li>
                <li class="dropdown">
                    <a href="../about">about</a>
                    <ul class="dropdown-content">
                        <li>
                            <a href="../about/meettheteam.html">
                                meet the team
                            </a>
                        </li>
                        <li>
                            <a href="../about/alumni.html">alumni</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="../auv">auv</a>
                    <ul class="dropdown-content">
                        <li>
                            <a href="../auv/overview.html">overview</a>
                        </li>
                        <li>
                            <a href="../auv/electrical.html">electrical</a>
                        </li>
                        <li>
                            <a href="../auv/mechanical.html">mechanical</a>
                        </li>
                        <li>
                            <a href="../auv/software.html">software</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="../blog.html">blog</a>
                </li>
                <li>
                    <a href="../gallery.html">gallery</a>
                </li>
                <li>
                    <a href="../sponsors.html">sponsors</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
