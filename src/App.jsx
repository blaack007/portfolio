import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Set up intersection observer for all sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );
    
    // Observe all sections
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      // Clean up
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app">
      <Hero />
      <Bio />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App

