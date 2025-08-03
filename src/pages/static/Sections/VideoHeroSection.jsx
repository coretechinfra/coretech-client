import React from 'react';

const VideoHeroSection = () => {
    return (
        <section className="container-fluid p-0 video-hero-section">
            <div className="video-wrapper">
                {/* Embed your video here */}
                <video autoPlay muted loop>
                    <source src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/security.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="hero-content">
                <div className="container">
                    <h1 className="hero-title">Vulnerability Assessment and Penetration Testing</h1>
                    <p className="hero-description">
                        Ensure the security of your digital assets with our comprehensive VAPT services. Identify potential vulnerabilities, assess their severity, and fortify your defenses against cyber threats.
                    </p>
                    <a href="#contact" className="cta-btn">Get Started</a>
                </div>
            </div>
        </section>
    );
}

export default VideoHeroSection;
