import React from 'react';
import './Navbar.css';
import logo from './../../media/logo.png';
import { Link} from 'react-router-dom';

const Navbar = (props) => {

        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light sticky-top py-4" id="main-nav">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addevent" className="navLink">Add Event</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="navLink">Logout</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
}

export default Navbar;