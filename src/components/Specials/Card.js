import React from 'react';
import { Link } from 'react-router-dom';
import './Specials.css';
import Salad from '../../assets/greek salad.jpg';
import Bruschetta from '../../assets/bruchetta.svg';
import Lemon from '../../assets/lemon dessert.jpg';

const Card = () => {
    const Menu = [
        {
            image: Salad,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
            order: "Order a delivery"
        },
        {
            image: Bruschetta,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
            order: "Order a delivery"
        },
        {
            image: Lemon,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
            order: "Order a delivery"
        }
    ];

    const items = Menu.map((menu, index) => (
        <div key={index} className="card">
            <div className="image-container">
                <img src={menu.image} alt={menu.title} />
            </div>
            <div className="card-text">
                <div className="card-header">
                    <h3>{menu.title}</h3>
                    <h3 className="price-tag">{menu.price}</h3>
                </div>
                <p className="card-description">{menu.description}</p>
                <Link to="/orderOnline" className="btn-order" aria-label={`Order ${menu.title}`}>
                    {menu.order}
                </Link>
            </div>
        </div>
    ));

    return (
        <div className="cards-container">
            {items}
        </div>
    );
};

export default Card;
