import { useState, useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      await emailjs.sendForm(
        'service_diunzws', 
        'template_k58naan', 
        form.current,
        '5ojB2PhrDAICY93Z3' 
      )

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      })
      form.current.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitting: false,
          submitted: false,
          error: null
        })
      }, 5000)

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      })
    }
  }

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
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <input 
                  type="text" 
                  name="user_name"
                  className="form-control" 
                  placeholder="Your Name" 
                  required 
                  disabled={status.submitting}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  name="user_email"
                  className="form-control" 
                  placeholder="Your Email" 
                  required 
                  disabled={status.submitting}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="text" 
                  name="subject"
                  className="form-control" 
                  placeholder="Subject" 
                  required 
                  disabled={status.submitting}
                />
              </div>
              <div className="mb-3">
                <textarea 
                  name="message"
                  className="form-control" 
                  rows="5" 
                  placeholder="Your Message" 
                  required
                  disabled={status.submitting}
                ></textarea>
              </div>
              {status.error && (
                <div className="alert alert-danger" role="alert">
                  {status.error}
                </div>
              )}
              {status.submitted && (
                <div className="alert alert-success" role="alert">
                  Message sent successfully!
                </div>
              )}
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


