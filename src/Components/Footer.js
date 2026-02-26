import React from 'react';
import '../Css/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer-dark">
            <div className="container text-center">
                <a className="footer-brand" href="#home">HANISH</a>
                <p className="footer-tagline">Full Stack Developer · React · Java · Banking Systems</p>

                <div className="footer-social-links">
                    <a href="https://github.com/hanish3026" target="_blank" rel="noopener noreferrer"
                        className="footer-social-link" aria-label="GitHub">
                        <i className="fa-brands fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/hanish-emrose-1778712ab/" target="_blank" rel="noopener noreferrer"
                        className="footer-social-link" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://www.instagram.com/chan_hanish/" target="_blank" rel="noopener noreferrer"
                        className="footer-social-link" aria-label="Instagram">
                        <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://wa.me/6379966434" target="_blank" rel="noopener noreferrer"
                        className="footer-social-link" aria-label="WhatsApp">
                        <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a href="mailto:hanishchan@gmail.com"
                        className="footer-social-link" aria-label="Email">
                        <i className="fa-solid fa-envelope" />
                    </a>
                </div>

                <div className="footer-divider" />

                <p className="footer-copy">
                    © 2025 <span>Hanish</span>. All Rights Reserved.
                    Built with React.js &amp; passion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
