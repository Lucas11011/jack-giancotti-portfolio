import React, { useState, useEffect, useMemo } from 'react';
import '../css/header.css';
import bgVideo from '../videos/SandbarsunCompressed2.mp4';
import pfpImage from '../imgs/pfp.jpg';

// Header component with background video and profile picture with caption
const Header = () => {

    // Text animation for titles
    const words = useMemo(() => ['Videographer', 'Photographer', 'Marketer', 'Jack of all trades'], []);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState(150);

    // Text animation effect
    useEffect(() => {
        const handleType = () => {
            const currentWord = words[currentWordIndex];

            if (isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                setTypeSpeed(75);
            } else {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                setTypeSpeed(105);
            }

            if (!isDeleting && currentText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        };

        const timer = setTimeout(handleType, typeSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, typeSpeed, words]);



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
                            <span className="videographer-text">{currentText}</span></p>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;