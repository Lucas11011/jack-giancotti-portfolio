import React from 'react';
import '../css/videoProjects.css';
import YouGotItVideo from '../videos/YouGotItForAnt.mp4';
import RefinedVideo from '../videos/RefinedvideoCompressed.mp4';
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
                        {/* #t=0.5 skips the black opening frame so the browser shows a visible thumbnail */}
                        <source src={YouGotItVideo + '#t=0.5'} type="video/mp4" />
                    </video>
                    <p>
                        My latest project is a music video I produced for rapper Ant Blunt. Music videos demand a different creative skill set: syncing visuals to rhythm, building energy through pacing and camera movement, and translating an artist’s vision into a distinct visual identity. Directed, shot, and edited by me from concept to final cut.
                    </p>
                </div>
                <div className="project-card">
                    <video width="640" height="360" controls>
                        <source src={RefinedVideo} type="video/mp4" />
                    </video>
                    <p>
                        I specialize in producing professional marketing videos that help businesses showcase their brand, services, and story. From pre-production planning and on-site directing to editing and final delivery, I handle each step to ensure the message is clear and engaging. This project is one example of how I’ve partnered with a company to translate their vision into a polished video.
                    </p>
                </div>
            </div>
            <Link to="/AllWork" className="see-all" onClick={handleLinkClick}>See all videos…</Link>
        </section>
    );
};

export default VideoProjects;