import React from 'react';
import './AboutOwners.css'; // Import your CSS file here
import Image1 from '../../assets/Mario and Adrian A.jpg';
import Image2 from '../../assets/Mario and Adrian A.jpg';

const AboutOwners = () => {
    return (
        <div className="about-container">
            <h1>About</h1>
            <div className="about-content">
                <div className="left-content">
                    <div className="top-content">
                        <h2>Little Lemon</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam vel ipsum lacinia dignissim.
                        Vestibulum et leo vel lectus laoreet fringilla. Morbi a ex vitae odio commodo tristique sed eget ex.
                        Integer consectetur urna sed turpis pharetra, a elementum odio tincidunt.
                    </p>
                </div>
                <div className="right-content">
                    <img src={Image1} alt="image1" className="image1" />
                    <img src={Image2} alt="image2" className="image2" />
                </div>
            </div>
        </div>
    );
}

export default AboutOwners;
