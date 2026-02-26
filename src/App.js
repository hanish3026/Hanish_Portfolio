import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Skill from './Components/Skill';
import CareerRoadmap from './Components/CareerRoadmap';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="glow-divider" />
      <About />
      <div className="glow-divider" />
      <Project />
      <div className="glow-divider" />
      <Skill />
      <div className="glow-divider" />
      <CareerRoadmap />
      <div className="glow-divider" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
