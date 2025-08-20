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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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