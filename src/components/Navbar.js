import React, { useState } from 'react';
import '../css/navbar.css';
import { Link, useLocation } from 'react-router-dom';

// Navbar component
const Navbar = () => {
    // State to manage sidebar visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Function to toggle sidebar
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Check if we're on the AllWork page, if so, don't show nav links
    const isAllWorkPage = location.pathname === '/AllWork' || location.pathname === '/allwork';

    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/" style={{ marginLeft: "1rem", textDecoration: "none", color: "inherit" }}>
                        Jack Giancotti
                    </Link>
                </div>
                <div className="spacer"></div>

                {/* Only show nav links if NOT on AllWork page */}
                {!isAllWorkPage && (
                    <div className="nav-links">
                        <a href="#about">About</a>
                        <a href="#video-projects">Video Projects</a>
                        <a href="#photography">Photography</a>
                        <a href="#work-experience">Work Experience</a>
                    </div>
                )}

                {/* Show "back to home" instead of nav links if on all work page */}
                {isAllWorkPage && (
                    <Link to="/" className="back-to-home" style={{ textDecoration: "none", color: "inherit" }}>
                        Back to Home
                    </Link>
                )}

                <div className="menu-icon">
                    <button onClick={toggleMenu}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </nav >

            {/* Overlay */}
            {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}

            {/* Sidebar and links*/}
            <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button className="close-btn" onClick={closeMenu}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="sidebar-links">
                    <Link to="/" onClick={closeMenu}>Home Page</Link>
                    <Link to="/AllWork" className="see-all" onClick={closeMenu}>All My work</Link>
                    <a href="#footer" onClick={closeMenu}>Contact Me</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;