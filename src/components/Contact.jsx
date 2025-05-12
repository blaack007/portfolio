import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title mb-5">Get In Touch</h2>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>mohamedkhalifa.4053@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>01552769267</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Alexandria, Egypt</p>
                </div>
              </div>
              <div className="social-links mt-4">
                <a href="https://www.linkedin.com/in/mohamed-khalifa-656420269" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/blaack007" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


