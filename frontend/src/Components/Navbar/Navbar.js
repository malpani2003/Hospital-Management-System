import React, { Component } from 'react'
import './Header.css'

class Navbar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Care Digital</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="#">About</a>
                                <a className="nav-link" href="#">Doctors</a>
                                <a className="nav-link" href="#">Book Appointment</a>
                                <a className="nav-link" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar