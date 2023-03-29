import React, { useRef } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {

  const SkillsRef = useRef(null);
  const PortfolioRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <div>
      <main>
        <Intro></Intro>
        <Navbar></Navbar>
        <section id="About" ref={AboutRef}>
        <About></About>
        </section>
        <section id="Skills" ref={SkillsRef}>
        <Skills></Skills>
        </section>
        <section id="Portfolio" ref={PortfolioRef}>
        <Portfolio></Portfolio>
        </section>
        <section id="Contact" ref={ContactRef}>
        <Contact></Contact>
        </section>
        <section id="icons">
        <a target="_blank" href="https://icons8.com/icon/bGjmkh3zMHa0/chevron-down" rel="noreferrer">Chevron Down</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
        </section>
      </main>
    </div>
  );
}

export default App;
