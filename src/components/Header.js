import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import HeaderNav from "./HeaderNav";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-link-wrapper">
                    <h1 className="header-title">
                        <span className="text-white">Smriti</span>
                        <span className="text-yellow">Cancer</span>
                        <span className="text-white">Care</span>
                    </h1>
                </Link>
                <nav className="header-navigator">
                    <ul className="header-menu">
                        <li className="header-item">
                            <Link to="/aboutus" className="header-link">About Us</Link>
                        </li>
                        <li className="header-item">
                            <Link to="/impact" className="header-link">Impact</Link>
                        </li>
                        <li className="header-item">
                            <Link to="/resources" className="header-link">Resources</Link>
                        </li>
                        <li className="header-item">
                            <Link to="/get-involved" className="header-link">Get Involved</Link>
                        </li>
                        <li className="header-item">
                            <Link to="/donate" className="header-link">Donate</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
