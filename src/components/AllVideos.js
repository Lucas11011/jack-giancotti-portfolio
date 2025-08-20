import React from 'react';
import '../css/allVideos.css';

// Importing all videos
import video1 from '../videos/BOATVIDEO.MOV';
import video2 from '../videos/disability_services.mp4';
import video3 from '../videos/DOCK.MP4';
import video4 from '../videos/FinalCompressed.mp4';
import video5 from '../videos/REFINEDVIDEO.mp4';
import video6 from '../videos/SANDBARSUN.MP4';
import video7 from '../videos/Sao Luis Project.mov';

const videos = [
    { src: video1, title: 'Boat Video' },
    { src: video2, title: 'UML Disability Services' },
    { src: video3, title: 'Dock' },
    { src: video4, title: 'UML Commuting' },
    { src: video5, title: 'Refined Renovations Video' },
    { src: video6, title: 'Sandbarsun' },
    { src: video7, title: 'Sao Luis Project' }
];

// Component to display all videos and corresponding titles
const AllVideos = () => {
    return (
        <div className="all-videos">
            <div className="video-grid">
                {videos.map((video, index) => (
                    <div key={index} className="video-card">
                        <video controls>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p>{video.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllVideos;
