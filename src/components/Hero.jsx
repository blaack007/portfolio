import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Mohamed Ahmed Khalifa</h1>
          <h2>Full-Stack Web Developer</h2>
          <div className="hero-social-links">
            <a href="https://www.linkedin.com/in/mohamed-khalifa-656420269" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/blaack007" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
          <a href="#contact" className="contact-button">CONTACT ME</a>
        </div>
      </div>
    </section>
  )
}

export default Hero




