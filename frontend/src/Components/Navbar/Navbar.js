import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Header.css'

class Navbar extends Component {
    render() {
        return (
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
        )
    }
}

export default Navbar