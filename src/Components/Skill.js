import React from 'react';
import Assets from '../assets/Asset';
import '../Css/Skill.css';

const SKILL_CATEGORIES = [
    {
        label: 'Frontend',
        skills: [
            { name: 'React.js', img: Assets.atom },
            { name: 'JavaScript', img: Assets.javascript },
            { name: 'HTML5', img: Assets.html },
            { name: 'CSS3', img: Assets.css },
            { name: 'Bootstrap', img: Assets.bootstrap },
        ]
    },
    {
        label: 'Backend',
        skills: [
            { name: 'Java', img: Assets.java },
            { name: 'Spring Boot', img: Assets.spring },
            { name: 'Spring MVC', img: Assets.spring },
            { name: 'Python', img: Assets.python },
            { name: 'REST APIs', img: Assets.postman },
        ]
    },
    {
        label: 'Database & Tools',
        skills: [
            { name: 'MySQL', img: Assets.sql },
            { name: 'Postman', img: Assets.postman },
            { name: 'Eclipse', img: Assets.exclipse },
            { name: 'Logstash', img: Assets.lodstash },
        ]
    },
];

const Skill = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <span className="section-label">Tech Stack</span>
                    <h2 className="section-title">
                        Skills & <span>Tools</span>
                    </h2>
                    <p className="section-sub">
                        Technologies I use to build robust, scalable, and beautiful digital products.
                    </p>
                </div>

                {SKILL_CATEGORIES.map((cat, ci) => (
                    <div key={ci} className="skills-category" data-aos="fade-up" data-aos-delay={ci * 100}>
                        <div className="skills-category-title">{cat.label}</div>
                        <div className="skills-section-grid">
                            {cat.skills.map((s, si) => (
                                <div
                                    key={si}
                                    className="skill-badge"
                                    data-aos="zoom-in"
                                    data-aos-delay={si * 50}
                                >
                                    <img src={s.img} alt={s.name} />
                                    <span className="skill-badge__name">{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
