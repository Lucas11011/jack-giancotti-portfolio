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
                        I specialize in producing professional marketing videos that help businesses showcase their brand, services, and story. From pre-production planning and on-site directing to editing and final delivery, I handle each step to ensure the message is clear and engaging. This project is one example of how I’ve partnered with a company to translate their vision into a polished, audience-ready video.
                    </p>
                </div>
                <div className="project-card">
                    <video width="640" height="360" controls>
                        <source src={BoatVideo} type="video/mp4" />
                    </video>
                    <p>
                        My work also includes aerial videography and advanced editing, which allow me to add cinematic movement and unique perspectives to projects. I’m experienced in drone operation, capturing smooth and dynamic shots that elevate a final piece. This video demonstrates just one way I use drone footage and editing expertise to create visually compelling content that stands out.
                    </p>
                </div>
            </div>
            <Link to="/AllWork" className="see-all" onClick={handleLinkClick}>See all videos…</Link>
        </section>
    );
};

export default VideoProjects;