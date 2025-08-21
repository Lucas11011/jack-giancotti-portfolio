import React from 'react';
import '../css/allVideos.css';

// Importing all videos
import video1 from '../videos/BOATVIDEO.MOV';
import video2 from '../videos/disability_servicesCompressed.mp4';
import video3 from '../videos/DockCompressed.mp4';
import video4 from '../videos/Final_Compressed.mp4';
import video5 from '../videos/RefinedvideoCompressed.mp4';
import video6 from '../videos/SandbarsunCompressed.mp4';
import video7 from '../videos/SaoLuisProjectCompressed5.mp4';

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
            <p>Disclaimer: Videos may not be as high quality as the originals. Access the original files for better quality here:
                <a href="https://" target="_blank" rel="noopener noreferrer"> Onedrive link</a>
            </p>
        </div>
    );
};

export default AllVideos;
