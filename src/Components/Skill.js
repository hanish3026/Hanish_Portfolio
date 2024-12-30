import React from 'react';
import Assets from '../assets/Asset';
import '../Css/Skill.css';

const Skill = () => {
    return (
        <div>
            <section id="skills" className="py-5">
                <div className="container">
                    <div data-aos="fade-up">
                        <h2 className="weight text-center my-md-5">Skills & <span id='fonts'>Tools</span></h2>
                    </div>
                    <div data-aos="zoom-in">
                    <div className="skills-container">
                        <div className="skill-item">
                            <img src={Assets.css} className="skill-img" alt="CSS" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.html} className="skill-img" alt="HTML" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.javascript} className="skill-img" alt="JavaScript" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.java} className="skill-img" alt="Java" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.sql} className="skill-img" alt="SQL" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.atom} className="skill-img" alt="Atom" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.bootstrap} className="skill-img" alt="Bootstrap" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.spring} className="skill-img" alt="Spring" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.python} className="skill-img" alt="Python" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.postman} className="skill-img" alt="postman" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.exclipse} className="skill-img" alt="eclipse" />
                        </div>
                        <div className="skill-item">
                            <img src={Assets.lodstash} className="skill-img" alt="lodstash" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;
