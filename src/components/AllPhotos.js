import React, { useEffect, useState } from 'react';
import '../css/allPhotos.css';

// importing all photos images
import img1 from '../photos/_MG_6619.JPG';
import img2 from '../photos/_MG_66261.JPG';
import img3 from '../photos/_MG_6652.JPG';
import img4 from '../photos/06_Giancotti_angel1_faial.jpg';
import img5 from '../photos/_MG_8866.JPG';

import img6 from '../photos/_MG_8854.JPG';
import img7 from '../photos/_MG_8855.JPG';
import img8 from '../photos/_MG_8858.JPG';
import img9 from '../photos/_MG_8863.JPG';
import img10 from '../photos/_MG_8880.JPG';
import img11 from '../photos/_MG_8883.JPG';
import img12 from '../photos/_MG_8885.JPG';
import img13 from '../photos/_MG_8889.JPG';
import img14 from '../photos/_MG_8920.JPG';
import img15 from '../photos/_MG_8921.JPG';
import img16 from '../photos/_MG_8977.JPG';
import img17 from '../photos/_MG_8983.JPG';
import img18 from '../photos/_MG_8986.JPG';
import img20 from '../photos/horizontal.jpg';
import img19 from '../photos/white.jpg';
import img21 from '../photos/vertical2.jpg';
import img22 from '../photos/vertical1.jpg';

const portfolio2026Context = require.context(
    '../photos/portfolio-2026',
    false,
    /\.webp$/
);

const featuredPortfolioPhotos = [
    './650a4127wall.webp',
    './650a4139wall.webp',
    './650a4155wall.webp',
    './650a4185wall.webp',
    './650a4333wall.webp',
    './650a4535wall.webp',
    './650a4647wall.webp',
    './650a4804wall.webp',
    './650a4955wall.webp'
];

const portfolio2026Images = portfolio2026Context
    .keys()
    .sort((a, b) => {
        const aPriority = featuredPortfolioPhotos.indexOf(a);
        const bPriority = featuredPortfolioPhotos.indexOf(b);

        if (aPriority !== -1 || bPriority !== -1) {
            if (aPriority === -1) return 1;
            if (bPriority === -1) return -1;
            return aPriority - bPriority;
        }

        return a.localeCompare(b);
    })
    .map(portfolio2026Context);

const images = [
    ...portfolio2026Images,
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17,
    img18, img19, img20, img21, img22
];

const AllPhotos = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const showPrevious = (e) => {
        e.stopPropagation();
        setSelectedIndex((current) => (current - 1 + images.length) % images.length);
    };

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((current) => (current + 1) % images.length);
    };

    useEffect(() => {
        if (selectedIndex === null) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                setSelectedIndex((current) => (current - 1 + images.length) % images.length);
            } else if (event.key === 'ArrowRight') {
                setSelectedIndex((current) => (current + 1) % images.length);
            } else if (event.key === 'Escape') {
                setSelectedIndex(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    // Function to handle closing the lightbox
    const handleCloseClick = (e) => {
        e.stopPropagation(); // Prevent the lightbox onClick from firing
        setSelectedIndex(null);
    };

    // Function to handle image click and set selected image
    return (
        <>
            <div className="all-photos">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`${index + 1}`}
                        loading="lazy"
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {/* Modal preview and close button */}
            {selectedIndex !== null && (
                <div className="lightbox" onClick={() => setSelectedIndex(null)}>
                    <button className="lightbox-close" onClick={handleCloseClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="lightbox-nav lightbox-previous" onClick={showPrevious} aria-label="Previous photo">
                        &#10094;
                    </button>
                    <img
                        src={images[selectedIndex]}
                        alt="Preview"
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
                    />
                    <button className="lightbox-nav lightbox-next" onClick={showNext} aria-label="Next photo">
                        &#10095;
                    </button>
                </div>
            )}
        </>
    );
};

export default AllPhotos;
