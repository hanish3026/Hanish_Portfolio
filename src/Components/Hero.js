import React, { useState, useEffect } from "react";
import '../Css/Hero.css'
import Assets from "../assets/Asset";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const text = "Hii, I'm Hanish"
    const speed = 200
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length - 1) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Animation duration (optional) 
            once:false,
        });
        
    }, []);
    return (
<div>

  <section id="home" className="d-flex align-items-center vh-100 text-center background">
    <div className="container">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-6 d-flex justify-content-center flex-column text-md-start text-center">
        <div data-aos="fade-right">
          <div>
            <h1>👋🏻{displayedText}</h1>
            <p className="lead">A Web Developer passionate about creating amazing user experiences and turning visions into responsive and engaging realities</p>
            <a href="#about" className="btn btn-light btn-lg text-white" style={{backgroundColor:"#3a0ca3"}}>Learn More</a>
          </div>
        </div>
        </div>
        {/* Right Column */}
        <div className="col-md-6 d-flex justify-content-center">
        <div data-aos="zoom-in" data-aos-delay="200">
          <img src={Assets.lap} alt="Full Stack" className="images" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    )
}

export default Hero
