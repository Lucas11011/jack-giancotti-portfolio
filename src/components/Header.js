import React from 'react';
import '../css/header.css';
import bgVideo from '../videos/SANDBARSUN.MP4';
import pfpImage from '../imgs/pfp.jpg';

// Header component with background video and profile picture with caption
const Header = () => {
    return (
        <header>
            <video autoPlay muted loop className="background-header">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-header">
                <div className="profile-text-container-header">
                    <img src={pfpImage} alt="Profile" className="profile-pic-header" />
                    <div className="caption">
                        <p>Hi, I'm Jack. <br />
                            <span className="videographer-text">Videographer.</span></p>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;