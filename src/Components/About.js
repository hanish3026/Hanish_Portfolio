import React from 'react';
import '../Css/About.css';
import Assets from '../assets/Asset';

const SPECS = [
    { icon: '🖥️', title: 'Full Stack Dev', desc: 'React.js, Spring Boot, REST APIs end-to-end' },
    { icon: '🏦', title: 'Banking Systems', desc: 'Tanzania-standard retail & corporate banking' },
    { icon: '🔄', title: 'Omni-Channel', desc: 'HDConnect backend via Spring MVC' },
    { icon: '🧩', title: 'Problem Solver', desc: 'Scalable, maintainable & tested code' },
];

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row align-items-center gy-5">

                    {/* Left – text */}
                    <div className="col-lg-6" data-aos="fade-right">
                        <span className="section-label">About Me</span>
                        <h2 className="about-title">
                            Crafting Digital Experiences <span className="accent">That Matter</span>
                        </h2>
                        <p className="about-bio">
                            A highly motivated <strong style={{ color: '#a78bfa' }}>Full Stack Developer</strong> with hands-on experience
                            in building enterprise-grade banking applications for <strong style={{ color: '#22d3ee' }}>Tanzania</strong>,
                            client onboarding platforms, and omni-channel backends. Proficient in React.js, Spring Boot,
                            MySQL, and RESTful APIs — I bring precision, performance, and polish to every product I build.
                        </p>

                        <div className="about-stats">
                            <div className="about-stat">
                                <span className="about-stat__num">1+</span>
                                <span className="about-stat__label">Years Exp.</span>
                            </div>
                            <div className="about-stat">
                                <span className="about-stat__num">5+</span>
                                <span className="about-stat__label">Projects</span>
                            </div>
                            <div className="about-stat">
                                <span className="about-stat__num">2</span>
                                <span className="about-stat__label">Companies</span>
                            </div>
                            <div className="about-stat">
                                <span className="about-stat__num">∞</span>
                                <span className="about-stat__label">Lines of Code</span>
                            </div>
                        </div>

                        <button className="about-resume-btn" onClick={() => window.open('/HANISH_E_Resume_2024-12-25.pdf')}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Download Resume
                        </button>
                    </div>

                    {/* Right – image + cards */}
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="row gy-3 mb-4">
                            <div className="about-img-wrap d-none d-lg-flex mb-4">
                                <div className="about-img-frame">
                                    <img src={Assets.hanish} alt="Hanish – Developer" />
                                    <div className="about-img-exp-tag">
                                        <span className="about-img-exp-tag__num">1+</span>
                                        <span className="about-img-exp-tag__label">Years Pro</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-cards-grid">
                            {SPECS.map((s, i) => (
                                <div key={i} className="about-spec-card" data-aos="zoom-in" data-aos-delay={i * 80}>
                                    <span className="about-spec-card__icon">{s.icon}</span>
                                    <div className="about-spec-card__title">{s.title}</div>
                                    <div className="about-spec-card__desc">{s.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
