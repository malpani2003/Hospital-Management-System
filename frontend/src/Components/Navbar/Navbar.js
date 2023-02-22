import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import App from '../../App';
import { Switch } from 'react-router-dom';
import NoPage from '../Error Page/NoPage';
// import AppointmentForm from "./Components/Booking_Form/Form";

// import { Link } from 'react-router-dom'
import './Header.css'
import SLider from '../ImageSlider/SLider';
import AppointmentForm from '../Booking_Form/Form';
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Header from "./Components/Header/Header";

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Care Digital</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/Book">Book Appointment</Link>
                                <Link className="nav-link" to="/Contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<><Header></Header><SLider></SLider></>} />
                    <Route path="/Book" element={<AppointmentForm></AppointmentForm>} />
                    <Route path="/Contact" element={<NoPage></NoPage>} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </>
        )
    }
}

export default Navbar