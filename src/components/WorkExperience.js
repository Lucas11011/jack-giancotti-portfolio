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
                            <h3>Audio/Visual Department</h3>
                            <p><strong>Oak View Group - Part-time</strong></p>
                            <p>Sep 2024 - Present : 9 mos</p>
                            <p>Lowell, Massachusetts, United States - On-site</p>
                            <p>
                                • Camera Operator at the Tsongas Center in partnership with ESPN and NESN. Used a variety of cameras for a variety of events. Events include PWHL's Boston Fleet, IFL's Massachusetts Pirates, and the UML Riverhawks.
                            </p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-content">
                            <h3>Camera Operator</h3>
                            <p><strong>University of Massachusetts Lowell - Part-time</strong></p>
                            <p>Sep 2024 - May 2025 : 9 mos</p>
                            <p>Lowell, Massachusetts, United States - On-site</p>
                            <p>
                                • Live camera operator for UML Lowell Athletics in partnership with ESPN and AE.tv. Used a variety of cameras for a variety of sports including Basketball, Baseball, Softball, Lacrosse, Field Hockey, Soccer, Track and Field, and Ice Hockey.
                            </p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-content">
                            <h3>Videographer/Editor</h3>
                            <p><strong>Refined Renovations, LLC - Part-time</strong></p>
                            <p>Dec 2023 - Present : 1 year 6 mos</p>
                            <p>Wilmington, Massachusetts, United States - Hybrid</p>
                            <p>
                                • Videographer / Editor / Content Creator
                            </p>
                        </div>
                    </div>
                </div>
                <div className="experience-image">
                    <img src={picCluster2} alt="WorkExperienceImage" />
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;