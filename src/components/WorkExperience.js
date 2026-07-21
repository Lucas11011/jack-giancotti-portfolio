import React from 'react';
import '../css/workExperience.css';
import picCluster2 from '../photos/pic-cluster-2.png';

// Work Experience Component
const WorkExperience = () => {
    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            <div className="experience-container">
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="experience-content">
                            <h3>Production Assistant - Camera Operator</h3>
                            <p><strong>Oak View Group - Part-time</strong></p>
                            <p>Aug 2024 - Present</p>
                            <p>Lowell, Massachusetts, United States - On-site</p>
                            <ul>
                                <li>Operate, set up, strike, and cable broadcast cameras at the Tsongas Center for ESPN and NESN coverage of professional, collegiate, and championship events.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-content">
                            <h3>Camera Operator</h3>
                            <p><strong>University of Massachusetts Lowell - Part-time</strong></p>
                            <p>Sep 2024 - May 2026</p>
                            <p>Lowell, Massachusetts, United States - On-site</p>
                            <ul>
                                <li>Operated live broadcast cameras and supported multimedia production for UMass Lowell Athletics coverage on ESPN, NESN, and AE.tv across a wide range of collegiate sports.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-content">
                            <h3>Content and Marketing Manager</h3>
                            <p><strong>Refined Renovations, LLC - Part-time</strong></p>
                            <p>Dec 2023 - Nov 2025</p>
                            <p>Wilmington, Massachusetts, United States - Hybrid</p>
                            <ul>
                                <li>Produced and edited social content across Instagram, TikTok, YouTube, and Facebook to grow brand visibility and customer engagement.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="experience-image">
                    <img src={picCluster2} alt="Work experience highlights" />
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
