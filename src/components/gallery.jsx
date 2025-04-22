import React from "react";
import "./gallery.css";
import placeholder from "../assets/placeholder.png";
import meettheteam from "../assets/meettheteam.png";

// Gallery items with specific positions defined in CSS
const galleryImages = [
    {
        id: 1,
        src: meettheteam,
        alt: "Gallery Image 1"
    },
    {
        id: 2,
        src: placeholder,
        alt: "Gallery Image 2"
    },
    {
        id: 3,
        src: placeholder,
        alt: "Gallery Image 3"
    },
    {
        id: 4,
        src: placeholder,
        alt: "Gallery Image 4"
    },
    {
        id: 5,
        src: placeholder,
        alt: "Gallery Image 5"
    },
    {
        id: 6,
        src: placeholder,
        alt: "Gallery Image 6"
    }
];

function Gallery() {
    return (
        <div className="gallery-container">
            <div className="gallery-hero">
                <h1 className="oxanium-semibold">Our Gallery</h1>
                <p className="blinker-regular">
                    Explore our journey through images - from building and testing to competition moments.
                </p>
            </div>
            
            <div className="gallery-grid">
                {galleryImages.map((image) => (
                    <div 
                        key={image.id} 
                        className="gallery-item"
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
