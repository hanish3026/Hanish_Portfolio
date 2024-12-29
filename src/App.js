import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import Project from './Components/Project';
import Skill from './Components/Skill';

function App() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
