import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import MakingOf from './components/MakingOf';
import Awards from './components/Awards';
import Footer from './components/Footer';
import { AnimatedCursor } from './components/AnimatedCursor';

function App() {
  return (
    <div className="font-body bg-neutral-50 text-neutral-900 overflow-hidden">
      <AnimatedCursor />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Awards />
        <MakingOf />
      </main>
      <Footer />
    </div>
  );
}

export default App;