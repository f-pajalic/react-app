import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './Specials.css';

function Specials() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/menu');
    };

    return (
        <section className="specials-container" aria-label="Weekly Specials">
            <div className="specials-title">
                <h1>This Week's Specials</h1>
                <div className="btn-container">
                    <button className="btn btn-menu" onClick={handleButtonClick}>Online Menu</button>
                </div>
            </div>
            <Card />
        </section>
    );
}

export default Specials;
