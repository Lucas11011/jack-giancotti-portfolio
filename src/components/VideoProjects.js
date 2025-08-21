import React from 'react';
import '../css/videoProjects.css';
import RefinedVideo from '../videos/RefinedvideoCompressed.mp4';
import BoatVideo from '../videos/BOATVIDEO.MOV';
import { Link } from 'react-router-dom';

// Scroll to top on link click to all videos
const handleLinkClick = () => {
    window.scrollTo(0, 0);
};

const VideoProjects = () => {
    return (
        <section className="video-projects">
            <h2>Video Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <video width="640" height="360" controls>
                        <source src={RefinedVideo} type="video/mp4" />
                    </video>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="project-card">
                    <video width="640" height="360" controls>
                        <source src={BoatVideo} type="video/mp4" />
                    </video>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <Link to="/AllWork" className="see-all" onClick={handleLinkClick}>See all videos…</Link>
        </section>
    );
};

export default VideoProjects;