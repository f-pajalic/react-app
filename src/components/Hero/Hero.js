import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import HeroImage from '../../assets/restauranfood.jpg';

function Hero() {
    return (
        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservations" aria-label="Reserve a Table">
                        <button className="btn">Reserve a Table</button>
                    </Link>
                </div>
                <div className="section-right">
                    <div className="image-box">
                        <img src={HeroImage} alt="Serving delicious dish" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
