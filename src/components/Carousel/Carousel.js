import React, { useState, useEffect } from 'react';
import mobileBg1 from '../../assets/mobile-bg1.png';
import mobileBg2 from '../../assets/mobile-bg2.png';
import desktopBg1 from '../../assets/desktop-bg1.png';
import desktopBg2 from '../../assets/desktop-bg2.png';
import './Carousel.css';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const mobileImages = [mobileBg1, mobileBg2, mobileBg1];
    const desktopImages = [desktopBg1, desktopBg2, desktopBg1];
    const images = isDesktop ? desktopImages : mobileImages;

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;

                if (nextIndex >= images.length) {
                    return prevIndex;
                }
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    useEffect(() => {
        if (index === images.length - 1) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setIndex(0);
                setTimeout(() => setTransitionEnabled(true), 50);
            }, 1000);
        }
    }, [index, images]);

    return (
        <div className='carousel-container'>
            <div
                className='carousel-track'
                style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: transitionEnabled ? 'transform 1s ease-in-out' : 'none',
                }}
            >
                {images.map((image, i) => (
                    <img 
                        key={i} 
                        src={image} 
                        alt={`Slide ${i + 1}`} 
                        className='carousel-image' 
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
