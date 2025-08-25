import React from 'react';
import '../css/photography.css';
import picCluster from '../photos/pic-cluster.png';
import { Link } from 'react-router-dom';

// Scroll to top on link click to see all photos
const handleLinkClick = () => {
    window.scrollTo(0, 0);
};

const Photography = () => {
    return (
        <section className="photography">
            <h2>Photography</h2>
            <div className="content">
                <div className="photo-grid">
                    <img src={picCluster} alt="Photo4" className="photo" />
                </div>
                <div className="photo-text">
                    <p>
                        Besides videography, I’m also skilled with photography. Producing both professional headshots and scenic images from my travels.
                    </p>
                    <p>
                        I enjoy creating sharp, vibrant photos that capture personality in portraits and detail in landscapes. Whether for personal branding, marketing, or storytelling, my goal is to deliver images that feel natural and authentic.
                    </p>
                </div>
            </div>
            <Link
                to="/AllWork"
                state={{ activeTab: 'photos' }}
                className="see-all"
                onClick={handleLinkClick}
            >
                See all photos…
            </Link>
        </section>
    );
};

export default Photography;