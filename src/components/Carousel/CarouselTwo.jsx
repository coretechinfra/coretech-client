import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../global/context';


const CarouselTwo = ({ videos, slideContent, array = false, align = 'left', color = 'light', contentBackground = false }) => {
    const { setIsSliderRendered } = useGlobalContext();
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const handleSlideNavigation = (index) => {
        setActiveSlide(index);
    };


    const [timer, setTimer] = useState(0); // Separate state for timer

    useEffect(() => {
        setIsSliderRendered(true);
        const intervalId = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1); // Increment timer state
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const nextSlideIndex = (activeSlide + 1) % slideContent.length;
        setActiveSlide(nextSlideIndex);
    }, [timer]); // Update activeSlide only when timer changes

    useEffect( () => () => setIsSliderRendered(false), [] );

    return (
        <>
            <section className='hero-slider-two' ref={sliderRef}>
                {
                    array ?
                        videos?.map((videoSrc, index) => (
                            <video
                                key={index}
                                className={`video-slide ${activeSlide === index ? 'active' : ''}`}
                                src={videoSrc}
                                autoPlay
                                muted
                                loop
                            />
                        )) :
                        <video
                            className={`video-slide active`}
                            src={videos[0]}
                            autoPlay
                            muted
                            loop
                        />
                }

                {slideContent?.map((slide, index) => (
                    <div className={`container ${align=='center' ? 'text-center' : '' } ${color == 'dark' ? 'text-dark' : ''} slider-content py-5 animated ${slide.animation} ${activeSlide === index ? 'active' : ''}`}>
                        <h1 className={`fw-bold ${align=='center' ? 'w-100' : ''} animated mb-4 text-uppercase`}>{slide?.title}</h1>
                        <h5 className={`animated  ${align=='center' ? 'w-100' : ''} mb-4`}>{slide?.description}</h5>
                        <button className='btn btn-warning rounded-5 fw-bold animated' onClick={() => slide?.buttonNavigation}>{slide?.buttonText}</button>
                    </div>
                ))}

                <div className="slider-navigation">
                    {slideContent?.map((_, index) => (
                        <div
                            key={index}
                            className={`nav-btn ${activeSlide === index ? 'active' : ''}`}
                            onClick={() => handleSlideNavigation(index)}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default CarouselTwo;