import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import the CSS file with your styles

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false); // State for button visibility

    const handleScroll = () => {
        // Show the button when scrolled down more than 300 pixels
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        // Smoothly scroll back to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Dependency array ensures this effect only runs once on mount

    return (
        <button 
            className={`scroll-to-top ${visible ? 'visible' : ''}`} 
            onClick={scrollToTop}
        >
            ↑ {/* You can use a specific icon or text */}
        </button>
    );
}

export default ScrollToTopButton;
