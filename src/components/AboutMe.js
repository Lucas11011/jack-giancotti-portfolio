import React from 'react';
import '../css/aboutMe.css';
import profilePic2 from '../imgs/pfp2.png';
import Premiere from '../imgs/icons/premiere-pro.svg';
import DaVinciResolve from '../imgs/icons/DaVinci-Resolve.png';
import AfterEffects from '../imgs/icons/after-effects.svg';
import Photoshop from '../imgs/icons/photoshop.svg';
import Audition from '../imgs/icons/audition.svg';
import InDesign from '../imgs/icons/indesign.svg';
import Linkedin from '../imgs/icons/icons8-linkedin-48.png';
import Instagram from '../imgs/icons/icons8-instagram-48.png';
import Gmail from '../imgs/icons/icons8-gmail-48.png';
import Resume from '../Jack Giancotti Resume.pdf'

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="content-about-me">
                <h2>About Me</h2>
                <p>
                    Hello, I'm Jack. I'm passionate about videography and all aspects of the editing process. Currently working in the sports broadcasting industry with a range of knowledge in numerous positions.
                    <br /><br />
                    Grateful to have been chosen as one of PWHL's Boston Fleet's in-house cameramen, one of IFL's Massachusetts Pirates broadcast cameramen, and continue to work for the Tsongas Center in Lowell and for UML Athletics.
                    <br /><br />
                    Extensive prior experience in marketing and social media for Refined Renovations and built proficient knowledge in all Adobe software, mostly in Adobe Premiere Pro and DaVinci Resolve.
                </p>
                <div className="icons">
                    <img src={Premiere} alt="Adobe Premiere Pro" />
                    <img src={DaVinciResolve} alt="DaVinci Resolve" />
                    <img src={AfterEffects} alt="Adobe After Effects" />
                    <img src={Audition} alt="Adobe Audition" />
                    <img src={Photoshop} alt="Adobe Photoshop" />
                    <img src={InDesign} alt="Adobe InDesign" />
                </div>
                <a target="_blank" rel="noopener noreferrer" href={Resume} className="resume-button">Access Resume</a>
            </div>
            <div className="profile-text-container-about-me">
                <img src={profilePic2} alt="Profile" className="profile-pic-about-me" />
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/jackgiancotti/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/jack.giancotti/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jackgiancotti@gmail.com&su=&body=" target="_blank" rel="noopener noreferrer">
                        <img src={Gmail} alt="Email" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;