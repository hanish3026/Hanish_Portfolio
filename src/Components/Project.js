import React, { useState } from 'react';
import Assets from '../assets/Asset';
import '../Css/Project.css';

const PROJECTS = [
    {
        title: 'Gym Trainer Portfolio',
        desc: 'A visually striking, fully responsive portfolio website for a professional gym trainer. Features dynamic sections for services, testimonials, transformation photos, and an integrated booking form.',
        type: 'Web App',
        status: 'live',
        color: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        tags: ['React.js', 'Bootstrap', 'CSS3', 'AOS'],
        img: Assets.gym_app,
    },
    {
        title: 'Internet Banking – Tanzania',
        desc: 'A full-featured internet banking application built to Tanzania banking standards. Includes account management, fund transfers, statement downloads, and multi-factor authentication flows.',
        type: 'FinTech',
        status: 'live',
        color: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        tags: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
        img: Assets.internet_banking,
    },
    {
        title: 'Corporate Banking Portal',
        desc: 'Enterprise-grade corporate banking platform supporting bulk payments, trade finance, payroll management, and multi-level approval workflows for Tanzanian corporate clients.',
        type: 'Enterprise',
        status: 'live',
        color: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
        tags: ['React.js', 'Redux', 'Java', 'Spring Boot'],
        img: Assets.corporate_banking,
    },
    {
        title: 'Admin Portal – DataVision SCB',
        desc: 'A sophisticated admin dashboard for the DataVision project at Standard Chartered Bank (SCB) Tanzania. Provides real-time data visualisation, user management, audit logs, and role-based access control.',
        type: 'Dashboard',
        status: 'dev',
        color: 'linear-gradient(135deg, #22d3ee, #4f46e5)',
        tags: ['React.js', 'REST APIs', 'Chart.js', 'MySQL'],
        img: Assets.admin_portal,
    },
    {
        title: 'HDConnect – Omni Channel Backend',
        desc: 'Backend omni-channel communication hub for HDSOFT Systems. Built with Spring MVC, it unifies retail banking, corporate banking, and third-party integrations into a single orchestration layer.',
        type: 'Backend',
        status: 'live',
        color: 'linear-gradient(135deg, #ec4899, #7c3aed)',
        tags: ['Spring MVC', 'Java', 'REST', 'MySQL', 'API Gateway'],
        img: Assets.omni_channel,
    },
];

const Project = () => {
    const [active, setActive] = useState('All');
    const categories = ['All', 'FinTech', 'Enterprise', 'Web App', 'Dashboard', 'Backend'];
    const shown = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === active);

    return (
        <section id="projects">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">
                        Creative <span>Portfolio</span>
                    </h2>
                    <p className="section-sub">
                        Enterprise-grade banking systems, fintech platforms, and web apps — built for real-world impact.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="proj-tabs" data-aos="fade-up" data-aos-delay="100">
                    {categories.map(c => (
                        <button
                            key={c}
                            className={`proj-tab ${active === c ? 'active' : ''}`}
                            onClick={() => setActive(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="proj-grid">
                    {shown.map((p, i) => (
                        <div className="proj-card" key={p.title} data-aos="fade-up" data-aos-delay={i * 80}>
                            <div className="proj-card__bar" style={{ background: p.color }} />
                            <div className="proj-card__img-wrap">
                                <img src={p.img} alt={p.title} />
                                <div className="proj-card__overlay" />
                                <span className="proj-card__type">{p.type}</span>
                                <span className={`proj-card__status proj-card__status--${p.status}`}>
                                    {p.status === 'live' ? '● Live' : '⚡ In Dev'}
                                </span>
                            </div>
                            <div className="proj-card__body">
                                <h3 className="proj-card__title">{p.title}</h3>
                                <p className="proj-card__desc">{p.desc}</p>
                                <div className="proj-card__tags">
                                    {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
