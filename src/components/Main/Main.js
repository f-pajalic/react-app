import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home';
import About from '../../routes/About';
import Menu from '../../routes/Menu';
import Login from '../../routes/Login';
import OrderOnline from '../../routes/Orderonline';
import Reservations from '../../routes/Reservations';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ConfirmedBooking from '../Booking/ConfirmedBooking';

const initializeTimes = () => {
    return {
        availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        resDate: '',
        resTime: '',
        guests: 1,
        occasion: ''
    };
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        default:
            return state.availableTimes;
    }
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_RES_DATE':
            return {
                ...state,
                resDate: action.payload,
                availableTimes: updateTimes(state, action),
            };
        case 'SET_RES_TIME':
            return { ...state, resTime: action.payload };
        case 'SET_GUESTS':
            return { ...state, guests: action.payload };
        case 'SET_OCCASION':
            return { ...state, occasion: action.payload };
        default:
            return state;
    }
}

function Main() {
    const [state, dispatch] = useReducer(reducer, {}, initializeTimes);

    return (
        <Router>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/orderOnline" element={<OrderOnline />} />
                    <Route
                        path="/reservations"
                        element={<Reservations state={state} dispatch={dispatch} />}
                        aria-label="Reservations"
                    />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default Main;
