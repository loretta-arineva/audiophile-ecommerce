import React from 'react';
import bestGear from '../../../assets/images/shared/mobile/image-best-gear.jpg';

const AboutAudioPhile = () => {
    return (
        <section id="about" className="page-wrapper">
            <div className="about-image__container">
                <img src={bestGear} alt="Photo of a man listening to music on audiophile headphones." className="about-image"/>
            </div>
            <div className="about-metadata">
                <h2 className="about-title">Bringing you the <strong>best</strong> audio gear</h2>
                <p className="about-description">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
    )
}

export default AboutAudioPhile;