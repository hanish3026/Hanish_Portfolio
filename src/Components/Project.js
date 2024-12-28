import React from 'react'
import Assets from '../assets/Asset';
import '../Css/Project.css'

const Project = () => {
    return (
        <div>
            <div data-aos="fade-up">
            <section id="projects" class="py-5 my-md-5">
                <div class="container">
                    <h2 class="weight text-center">My creative <span id='font'>Portfolio</span> section</h2>
                    <div className="row my-5">
                        {/* Gym Trainer Portfolio Link */}
                        <div className="col">
                            <div data-aos="fade-right">
                                <a href="https://monster-siva-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                                    <div className="card custom-card">
                                        <img className="card-img-top" src={Assets.gymtrainer} alt="Loading" />
                                        <h4 className="card-title text-center">Gym Trainer Portfolio</h4>
                                        <div className="card-body">
                                            A visually attractive Portfolio website!
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        {/* Job Portal Link */}
                        <div className="col">
                            <div data-aos="fade-left">
                                <a href="https://github.com/hanish3026/lead_sense_jobportal" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                                    <div className="card custom-card">
                                        <img className="card-img-top" src={Assets.jobPortal} alt="Loading" />
                                        <h4 className="card-title text-center">Job Portal</h4>
                                        <div className="card-body">
                                            A platform for job listings and applications.
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Employee Management System Link */}
                        <div className="col">
                            <div data-aos="fade-right">
                                <a href="https://github.com/hanish3026/Employee_Management_CRUD" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                                    <div className="card custom-card">
                                        <img className="card-img-top" src={Assets.emp} alt="Loading" />
                                        <h4 className="card-title text-center">Employee Management System</h4>
                                        <div className="card-body">
                                            System for managing employee information.
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* My Portfolio Link */}
                        <div className="col">
                            <div data-aos="fade-left">
                                <a href="https://hanish-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                                    <div className="card custom-card">
                                        <img className="card-img-top" src={Assets.laps} alt="Loading" />
                                        <h4 className="card-title text-center">My Portfolio</h4>
                                        <div className="card-body">
                                            A visually attractive Portfolio website!
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default Project;
