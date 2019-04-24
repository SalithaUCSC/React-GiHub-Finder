import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><i className="fab fa-github"></i> REACT GITFINDER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link" to="/">HOME
                            </Link>
                        </li>                            
                        <li className="nav-item">
                            <Link
                                className="nav-link" to="/about">ABOUT
                            </Link>
                        </li> 
                        <li className="nav-item">
                            <Link
                                className="nav-link" to="/contact">CONTACT
                            </Link>
                        </li>   
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;