import React from 'react';
import '../css/affiliations.css';
import ESPN from '../imgs/affiliations/espn.png';
import NESN from '../imgs/affiliations/nesn.png';
import AmericaEastTV from '../imgs/affiliations/aetv.png';
import RefinedRenovations from '../imgs/affiliations/refined-renovations.png';
import OakViewGroup from '../imgs/affiliations/oak-view-group.png';
import UMassLowellAthletics from '../imgs/affiliations/UMass_Lowell_River_Hawks_logo.svg.png';
import BostonFleet from '../imgs/affiliations/BostonFleet.png';
import MassachusettsPirates from '../imgs/affiliations/Massachusetts_Pirates_Logo.svg.png';

// Affiliation images and captions
const Affiliations = () => {
    return (
        <section className="affiliations">
            <div className="logo-grid">
                <div className="logo-item">
                    <img src={ESPN} alt="ESPN+" />
                    <p>ESPN+</p>
                </div>
                <div className="logo-item">
                    <img src={NESN} alt="NESN" />
                    <p>NESN</p>
                </div>
                <div className="logo-item">
                    <img src={AmericaEastTV} alt="America East TV" />
                    <p>America East TV</p>
                </div>
                <div className="logo-item">
                    <img src={RefinedRenovations} alt="Refined Renovations" />
                    <p>Refined Renovations LLC</p>
                </div>
                <div className="logo-item">
                    <img src={OakViewGroup} alt="Oak View Group" />
                    <p>Oak View Group</p>
                </div>
                <div className="logo-item">
                    <img src={UMassLowellAthletics} alt="UMass Lowell Athletics" />
                    <p>UMass Lowell Athletics</p>
                </div>
                <div className="logo-item">
                    <img src={BostonFleet} alt="Boston Fleet" />
                    <p>Boston Fleet</p>
                </div>
                <div className="logo-item">
                    <img src={MassachusettsPirates} alt="Massachusetts Pirates" />
                    <p>Massachusetts Pirates</p>
                </div>
            </div>
        </section>
    );
};

export default Affiliations;