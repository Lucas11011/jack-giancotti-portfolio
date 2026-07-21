import React from 'react';
import '../css/videoProjects.css';
import YouGotItVideo from '../videos/YouGotItForAnt.mp4';
import MultimediaReel from '../videos/JackGiancotti_2025_Uml.mp4';
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
                        My latest project is a music video I produced for rapper Ant Blunt. Music videos demand a different creative skill set: syncing visuals to rhythm, building energy through pacing and camera movement, and translating an artist's vision into a distinct visual identity. Directed, shot, and edited by me from concept to final cut.
                    </p>
                </div>
                <div className="project-card">
                    <video width="640" height="360" controls>
                        <source src={MultimediaReel} type="video/mp4" />
                    </video>
                    <p>
                        A multimedia reel created for UMass Lowell Athletics, featuring energetic highlights from multiple sports and events through sharp pacing, dynamic editing, and bold visuals.
                    </p>
                </div>
            </div>
            <Link to="/AllWork" className="see-all" onClick={handleLinkClick}>See all videos →</Link>
        </section>
    );
};

export default VideoProjects;
