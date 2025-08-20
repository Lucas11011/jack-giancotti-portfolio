import React from 'react';
import '../css/footer.css';
import Linkedin from '../imgs/icons/icons8-linkedin-48.png';
import Instagram from '../imgs/icons/icons8-instagram-48.png';
import Gmail from '../imgs/icons/icons8-gmail-48.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    // Check if we're on the AllWork page, if so, don't show nav links
    const isAllWorkPage = location.pathname === '/AllWork' || location.pathname === '/allwork';

    return (
        <footer className="footer">
            <div className="contact-section">
                <p>Contact me!</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="mailto:jack@example.com" target="_blank" rel="noopener noreferrer">
                        <img src={Gmail} alt="Email" />
                    </a>
                </div>
            </div>

            {/* Only show nav links if NOT on AllWork page */}
            {!isAllWorkPage && (
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#video-projects">Video Projects</a>
                    <a href="#photography">Photography</a>
                    <a href="#work-experience">Work Experience</a>
                </div>
            )}

            {isAllWorkPage && (
                <Link to="/" className="back-to-home" style={{ marginTop: "1rem", textDecoration: "none", color: "inherit" }}>
                    Back to Home
                </Link>
            )}

            <p className="copyright">© Jack Giancotti</p>
        </footer>
    );
};

export default Footer;