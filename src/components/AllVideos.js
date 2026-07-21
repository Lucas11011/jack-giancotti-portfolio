import React from 'react';
import '../css/allVideos.css';

// Importing all videos
import video0 from '../videos/YouGotItForAnt.mp4';
import video1 from '../videos/BOATVIDEO.MOV';
import video2 from '../videos/disability_servicesCompressed.mp4';
import video4 from '../videos/Final_Compressed.mp4';
import video5 from '../videos/RefinedvideoCompressed.mp4';
import video7 from '../videos/SaoLuisProjectCompressed5.mp4';
import video8 from '../videos/JackGiancotti_2025_Uml.mp4';

const videos = [
    // #t=0.5 skips the black opening frame so the browser shows a visible thumbnail
    { src: video0 + '#t=0.5', title: 'You Got It For Ant' },
    { src: video8, title: 'Multimedia Reel' },
    { embedSrc: 'https://umasslowell.azure-api.net/brightcove/v1/video/6397985478112', title: 'UML Industry Days' },
    { src: video1, title: 'Boat Video' },
    { src: video2, title: 'UML Disability Services' },
    { src: video4, title: 'UML Commuting' },
    { src: video5, title: 'Refined Renovations Video' },
    { src: video7, title: 'Sao Luis Project' }
];

// Component to display all videos and corresponding titles
const AllVideos = () => {
    return (
        <div className="all-videos">
            <div className="video-grid">
                {videos.map((video, index) => (
                    <div key={index} className="video-card">
                        {video.embedSrc ? (
                            <iframe
                                src={video.embedSrc}
                                title={video.title}
                                allowFullScreen
                                frameBorder="0"
                            />
                        ) : (
                            <video controls>
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <p>{video.title}</p>
                    </div>
                ))}
            </div>
            {/* <p>Disclaimer: Videos may not be as high quality as the originals. Access the original files for better quality here:
                <a href="https://" target="_blank" rel="noopener noreferrer"> Onedrive link</a>
            </p> */}
        </div>
    );
};

export default AllVideos;
