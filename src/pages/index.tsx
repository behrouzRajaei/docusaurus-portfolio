import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Skills from '../components/my-skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
