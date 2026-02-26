import React, { useState, useEffect, useRef, useCallback } from "react";
import '../Css/Hero.css';
import Assets from "../assets/Asset";

const ROLES = [
  "Full Stack Developer",
  "React.js Enthusiast",
  "Java Developer",
  "UI/UX Craftsman",
  "Problem Solver",
];

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.1,
}));

const Hero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [roleDeleting, setRoleDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const animFrameRef = useRef(null);
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const currentMouseRef = useRef({ x: 0.5, y: 0.5 });

  const name = "Hii, I'm Hanish";
  const nameSpeed = 100;

  /* ── Name typewriter (runs once) ── */
  useEffect(() => {
    setIsLoaded(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < name.length) {
        setDisplayedName(name.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, nameSpeed);
    return () => clearInterval(interval);
  }, []);

  /* ── Role typewriter loop ── */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!roleDeleting && roleText.length < current.length) {
      timeout = setTimeout(() => setRoleText(current.slice(0, roleText.length + 1)), 80);
    } else if (!roleDeleting && roleText.length === current.length) {
      timeout = setTimeout(() => setRoleDeleting(true), 1800);
    } else if (roleDeleting && roleText.length > 0) {
      timeout = setTimeout(() => setRoleText(roleText.slice(0, -1)), 40);
    } else if (roleDeleting && roleText.length === 0) {
      setRoleDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [roleText, roleDeleting, roleIndex]);

  /* ── Smooth mouse parallax ── */
  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    targetMouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  }, []);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      currentMouseRef.current.x = lerp(currentMouseRef.current.x, targetMouseRef.current.x, 0.06);
      currentMouseRef.current.y = lerp(currentMouseRef.current.y, targetMouseRef.current.y, 0.06);
      setMousePos({ x: currentMouseRef.current.x, y: currentMouseRef.current.y });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const parallaxImg = {
    transform: `translate(${(mousePos.x - 0.5) * -22}px, ${(mousePos.y - 0.5) * -14}px)`,
    transition: "transform 0.05s linear",
  };

  const parallaxOrb1 = {
    transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 30}px)`,
  };
  const parallaxOrb2 = {
    transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * 20}px)`,
  };
  const parallaxOrb3 = {
    transform: `translate(${(mousePos.x - 0.5) * 55}px, ${(mousePos.y - 0.5) * -35}px)`,
  };

  const gradientBg = {
    background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, 
      rgba(67,56,202,0.35) 0%, 
      rgba(109,40,217,0.2) 30%, 
      rgba(10,8,30,0.95) 70%)`,
  };

  return (
    <section
      id="home"
      className="hero-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* ── Dynamic gradient overlay that follows cursor ── */}
      <div className="hero-gradient-overlay" style={gradientBg} />

      {/* ── Animated particle field ── */}
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Floating gradient orbs ── */}
      <div className="hero-orb hero-orb--1" style={parallaxOrb1} aria-hidden="true" />
      <div className="hero-orb hero-orb--2" style={parallaxOrb2} aria-hidden="true" />
      <div className="hero-orb hero-orb--3" style={parallaxOrb3} aria-hidden="true" />

      {/* ── Grid lines ── */}
      <div className="hero-grid" aria-hidden="true" />

      {/* ── Content ── */}
      <div className={`container hero-content ${isLoaded ? "hero-content--visible" : ""}`}>
        <div className="row align-items-center">

          {/* Left column */}
          <div className="col-md-6 d-flex justify-content-center flex-column text-md-start text-center hero-left">
            <div className="hero-badge">
              <span className="hero-badge__dot" />
              Available for work
            </div>

            <h1 className="hero-name">
              <span className="hero-wave">👋🏻</span> {displayedName}
              <span className="hero-cursor" />
            </h1>

            <div className="hero-role-wrapper">
              <span className="hero-role-prefix">I am a </span>
              <span className="hero-role-text">{roleText}</span>
              <span className="hero-role-cursor">|</span>
            </div>

            <p className="hero-lead">
              Passionate about crafting <span className="hero-highlight">blazing-fast</span>,
              responsive, and engaging web experiences that turn visions into reality.
            </p>

            <div className="hero-cta-group">
              <a href="#about" className="hero-btn hero-btn--primary">
                <span>Explore My Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="hero-btn hero-btn--outline">
                Let's Talk
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/hanish3026" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hanish3026" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="col-md-6 d-flex justify-content-center hero-right">
            <div className="hero-img-container" style={parallaxImg}>
              <div className="hero-img-ring hero-img-ring--outer" />
              <div className="hero-img-ring hero-img-ring--inner" />
              <div className="hero-img-glow" />
              <img src={Assets.lap} alt="Hanish – Full Stack Developer" className="hero-img" />
              <div className="hero-img-badge hero-img-badge--top">
                <span className="hero-img-badge__icon">⚡</span>
                <span>Full Stack</span>
              </div>
              <div className="hero-img-badge hero-img-badge--bottom">
                <span className="hero-img-badge__icon">🚀</span>
                <span>React & Java</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-scroll" aria-label="Scroll down">
        <div className="hero-scroll__mouse">
          <div className="hero-scroll__wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
