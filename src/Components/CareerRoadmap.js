import React from 'react';
import '../Css/CareerRoadmap.css';

const TIMELINE = [
    {
        period: 'Sep 2024 – Nov 2024',
        company: 'Leadsense Media Private Ltd',
        role: 'React Developer Intern',
        status: 'prev',
        bullets: [
            'Developed their own internal product — a Client Onboarding platform for streamlined customer registration.',
            'Built dynamic onboarding forms, multi-step wizards, and data validation workflows.',
            'Integrated REST APIs for backend data syncing and real-time status updates.',
            'Collaborated with the design team to ensure pixel-accurate UI implementation.',
        ],
        tags: ['React.js', 'REST API', 'Bootstrap', 'JavaScript', 'Git'],
    },
    {
        period: 'Dec 2024 – Present',
        company: 'HDSOFT Systems',
        role: 'Software Developer',
        status: 'current',
        bullets: [
            'Working in the DataVision team on SCB (Standard Chartered Bank) Tanzania banking project.',
            'Developed Retail Banking and Corporate Banking modules to Tanzania standards.',
            'Built the Internet Banking portal and Admin Portal for enterprise-level banking users.',
            'Architected HDConnect — an omni-channel backend hub using Spring MVC that unifies all banking channels.',
            'Delivered full-stack features across React.js front end and Spring Boot / Spring MVC back end.',
        ],
        tags: ['React.js', 'Spring MVC', 'Spring Boot', 'Java', 'MySQL', 'REST API', 'Redux', 'Git'],
    },
];

const CareerRoadmap = () => {
    return (
        <section id="roadmap">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">
                        My Career <span>Journey</span>
                    </h2>
                    <p className="section-sub">
                        From React intern to full-stack software developer — building enterprise banking products for Tanzania.
                    </p>
                </div>

                <div className="timeline">
                    {TIMELINE.map((item, i) => (
                        <div
                            key={i}
                            className="timeline-item"
                            data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                            data-aos-delay={i * 120}
                        >
                            {/* Center dot */}
                            <div className="timeline-dot" />

                            {/* Card */}
                            <div className="tl-card">
                                <span className={`tl-status tl-status--${item.status}`}>
                                    {item.status === 'current' ? '● Current' : '✓ Completed'}
                                </span>

                                <div className="tl-period mt-4">
                                    <span className="tl-period__dot" />
                                    {item.period}
                                </div>

                                <div className="tl-company">{item.company}</div>
                                <div className="tl-role">{item.role}</div>

                                <ul className="tl-bullets">
                                    {item.bullets.map((b, bi) => (
                                        <li key={bi}>{b}</li>
                                    ))}
                                </ul>

                                <div className="tl-tags">
                                    {item.tags.map(t => (
                                        <span key={t} className="tl-tag">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Empty spacer for the other side */}
                            <div style={{ width: 'calc(50% - 2.5rem)' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerRoadmap;
