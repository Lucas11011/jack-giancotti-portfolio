import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/allWork.css';
import AllVideos from '../components/AllVideos.js';
import AllPhotos from '../components/AllPhotos.js';


const AllWork = () => {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState('videos'); // Default to 'videos'

    useEffect(() => {
        // Check if there's state passed from the link (from photos or videos)
        if (location.state?.activeTab) {
            setSelectedTab(location.state.activeTab);
        }
        window.scrollTo(0, 0);
    }, [location.state]);

    return (
        <section className="gallery-selector">
            <h2>All My Work</h2>
            <div className="selection-bar">
                <button
                    className={selectedTab === 'videos' ? 'active' : 'videos'}
                    onClick={() => setSelectedTab('videos')}
                >
                    Videos
                </button>
                <button
                    className={selectedTab === 'photos' ? 'active' : 'photos'}
                    onClick={() => setSelectedTab('photos')}
                >
                    Photos
                </button>
            </div>
            {selectedTab === 'videos' ? <AllVideos /> : <AllPhotos />}
        </section>
    );
};

export default AllWork;