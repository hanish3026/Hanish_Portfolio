import React from 'react'
import '../Css/About.css'
import Assets from '../assets/Asset';

const About = () => {
    // function handleClick() {
    //     window.location.href = "/HANISH_E_Resume_2024-12-25.pdf";
    // }
    return (
        <div>
            <section id="about" className="py-5">
                <div className="text-center my-md-5">
                    <div data-aos="fade-up">
                        <h2 className='weight'>A Great Design Is Multi-sensory <span id='font'>Experience</span>.</h2>
                        <h2 className='weight'>That Makes Your Business More <span id='font'>Memorable</span></h2>
                    </div>
                </div>
                <div className="container">
                    <div data-aos="fade-right">
                        <div className="row">
                            <div className="col-md-12 phone">
                                <h2 className="weights">
                                    About Me
                                </h2>
                                <p className="font my-4">
                                    A highly motivated Full Stack Developer focused on delivering responsive, efficient, and user-centric web solutions. Passionate about continuous learning and contributing to dynamic projects that enhance user experiences and drive business value. Proficient in frontend and backend technologies such as React.js, Bootstrap, Spring Boot, MySQL, and RESTful APIs. Experienced in debugging, optimizing performance, and writing scalable, maintainable code.
                                    Skilled in building intuitive interfaces and designing interactive experiences with an emphasis on accessibility and responsiveness.
                                    I thrive in both collaborative agile teams and independent roles with minimal supervision.
                                    Dedicated to high code quality through testing and version control. Enthusiastic about exploring Machine Learning and AI,
                                    and creating data-driven solutions. Committed to professional growth, staying up-to-date with industry trends,
                                    and contributing to impactful projects aligned with business objectives.
                                </p>

                                {/* <button className="btn btn-lg button text-white" onClick={handleClick}>Resume</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <div data-aos="flip-left">
                                <div className="card custom-card">
                                    <img className="card-img-top" src={Assets.fullstack} alt="Loading" />
                                    <h4 className="card-title text-center">Fullstack Developer</h4>
                                    <div className="card-body">
                                        A Java Full Stack Developer is skilled in both frontend and backend technologies, proficient in Java, Spring Boot, HTML, CSS, JavaScript, and database management, delivering scalable web solutions.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div data-aos="flip-left">
                                <div className="card custom-card">
                                    <img className="card-img-top" src={Assets.reactjs} alt="Loading" />
                                    <h4 className="card-title text-center">React.js Developer</h4>
                                    <div className="card-body">
                                        A proficient React.js developer experienced in building dynamic user interfaces, utilizing Redux for state management, and leveraging JavaScript to create scalable, responsive web applications.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div data-aos="flip-left">
                                <div className="card custom-card">
                                    <img className="card-img-top" src={Assets.problemSolving} alt="Loading" />
                                    <h4 className="card-title text-center">Problem Solver</h4>
                                    <div className="card-body">

                                        Possessing strong analytical and problem-solving abilities, I am a creative thinker who thrives on tackling challenges and puzzles, always eager to find innovative solutions and improve.                               </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div data-aos="flip-left">
                                <div className="card custom-card">
                                    <img className="card-img-top" src={Assets.Ingram} alt="Loading" />
                                    <h4 className="card-title text-center">Tech Enthusiast</h4>
                                    <div className="card-body">
                                        A passionate tech enthusiast, constantly exploring new technologies, tools, and frameworks, committed to staying updated with trends, and applying innovative solutions to real-world problems.</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
