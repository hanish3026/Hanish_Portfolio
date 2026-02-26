import React, { useState, useEffect } from 'react';
import '../Css/NavBar.css';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'projects', 'skills', 'roadmap', 'contact'];
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'roadmap', label: 'Journey' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark-glass ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="nav-brand navbar-brand" href="#home">HANISH</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-1">
                        {links.map(({ id, label }) => (
                            <li key={id} className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === id ? 'active' : ''}`}
                                    href={`#${id}`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
