import React, { useState } from 'react';
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

const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17,
    img18, img19, img20, img21, img22
];

const AllPhotos = () => {
    const [selected, setSelected] = useState(null);

    // Function to handle closing the lightbox
    const handleCloseClick = (e) => {
        e.stopPropagation(); // Prevent the lightbox onClick from firing
        setSelected(null);
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
                        onClick={() => setSelected(src)} // set selected image on click
                    />
                ))}
            </div>

            {/* Modal preview and close button */}
            {selected && (
                <div className="lightbox" onClick={() => setSelected(null)}>
                    <button className="lightbox-close" onClick={handleCloseClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <img
                        src={selected}
                        alt="Preview"
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
                    />
                </div>
            )}
        </>
    );
};

export default AllPhotos;
