import React from 'react';
import '../Css/NavBar.css';

const NavBar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar fixed-sm-top py-md-3 backgroundNavBar">
                <div className="container-fluid">
                <div data-aos="fade-down">
                    <a className="navbar-brand Title" href="#home">HANISH</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item tranform special-nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item tranform special-nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item tranform special-nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item tranform special-nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    );
};

export default NavBar;
