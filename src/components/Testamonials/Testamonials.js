import React from 'react';
import Rating from '../Rating/Rating';
import './Testamonials.css'
import Lemon from '../../assets/lemon dessert.jpg';


function Testimonials() {
    const testimonialsData = [
        {
            image: Lemon,
            name: "Pota",
            rating: 4.5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            image: Lemon,
            name: "Bota",
            rating: 5,
            text: 'Nulla facilisi. Proin feugiat nisl quis orci efficitur, ac vehicula nisl maximus.'
        },
        {
            image: Lemon,
            name: "Lota",
            rating: 3.5,
            text: 'Sed at lacus eget urna commodo lobortis.'
        },
        {
            image: Lemon,
            name: "Nota",
            rating: 4,
            text: 'Vivamus at ligula pretium, convallis elit eget, finibus velit.'
        }
    ];

    return (
        <div className="testimonials-container">
            <h1>Testimonials</h1>
            <div className="ratings">
                {testimonialsData.map((testimonial, index) => (
                    <Rating
                        key={index}
                        image={testimonial.image}
                        rating={testimonial.rating}
                        text={testimonial.text}
                        name={testimonial.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Testimonials;