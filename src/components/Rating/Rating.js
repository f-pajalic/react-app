import React from 'react';
import './Rating.css'


function Rating({ image, rating, text, name }) {
    return (
        <div className="rating">
            <img src={image} alt="Rating" className="rating-image" />
            <div className="rating-info">
                <h3>Rating: {rating}</h3>
                <b>{name}</b>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Rating;