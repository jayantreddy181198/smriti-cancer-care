import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                Smriti Cancer 
                Care Foundation
            </div>
            <nav className="nav">
                <a href="#impact" className="nav-item">Impact</a>
                <a href="#resources" className="nav-item">Resources</a>
                <a href="#about-us" className="nav-item">About Us</a>
                <a href="#get-involved" className="nav-item">Get Involved</a>
                <button className="donate-button">Donate</button>
            </nav>
        </header>
    );
}

export default Header;