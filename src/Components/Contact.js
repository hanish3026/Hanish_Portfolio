import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../Css/Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_f3gwitx', // Replace with your EmailJS service ID
                'template_6e6wjs9', // Replace with your EmailJS template ID
                formRef.current, // Pass the form reference here
                'Xhzuk-_NMje0G1_nA' // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send the message. Please try again later.');
                }
            );

        setForm({
            name: '',
            email: '',
            message: '',
            number: ''
        });
    };

    return (
        <div className="container" id="contact">
            <section className="py-5">
                <div className="row mb-5 text-light" style={{ paddingTop: '3rem' }}>
                    <p className="contact-heading text-center mb-md-5" data-aos="fade-up">
                        Take A Coffee & <span>Chat</span> With <span>Me</span>
                    </p>
                    <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-start mb-5 mb-lg-0">
                        <div className="contact-info-container w-100 p-lg-4">
                            <div data-aos="fade-right" data-aos-delay="100">
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-house"></i></div>
                                    <div>
                                        <p className="info-text">Chennai, India</p>
                                        <small className="info-subtext">Open to remote work</small>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="200">
                                <div className="info-card">
                                    <a href="https://wa.me/6379966434" target="_blank" rel="noopener noreferrer">
                                        <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                                        <div>
                                            <p className="info-text">+91 6379966434</p>
                                            <small className="info-subtext">9am to 6pm IST</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="300">
                                <div className="info-card">
                                    <a href="mailto:hanishchan@gmail.com">
                                        <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                                        <div>
                                            <p className="info-text">hanishchan@gmail.com</p>
                                            <small className="info-subtext">Send me a query anytime!</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div data-aos="fade-left">
                            <div className="container">
                                <div className="contact-card w-100 shadow-lg border-0">
                                    <div className="contact-card-header text-white text-center">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="contact-card-body">
                                        <form ref={formRef} onSubmit={handleSubmit}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="name" className="form-label">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="number" className="form-label">
                                                    Number
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="number"
                                                    name="number"
                                                    value={form.number}
                                                    onChange={handleChange}
                                                    placeholder="Enter your number"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="message" className="form-label">
                                                    Message
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Enter your message"
                                                    rows="4"
                                                    required
                                                />
                                            </div>
                                            <div className="d-grid mt-4">
                                                <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center gap-2">
                                                    Send Message
                                                    <i className="fa-solid fa-paper-plane"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
