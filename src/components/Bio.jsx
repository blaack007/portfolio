import { FaDownload } from 'react-icons/fa'
import './Bio.css'

function Bio() {
  return (
    <section id="bio" className="py-5">
      <div className="container">
        <h2 className="section-title mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="bio-image-container">
              <img 
                src={new URL('../assets/last.jpg', import.meta.url).href} 
                alt="Mohamed Ahmed Khalifa" 
                className="bio-image" 
              />
            </div>
          </div>
          <div className="col-md-6">
            <p className="bio-text">
              Hi, I'm Mohamed Ahmed Khalifa, a passionate full-stack web developer from Alexandria, Egypt. I specialize in 
              creating responsive and functional web applications using modern technologies and frameworks.
            </p>
            <p className="bio-text">
              With a background in Business Administration and specialized training in Full-Stack Web Development, 
              I combine business acumen with technical expertise to deliver solutions that meet both user needs and 
              business objectives.
            </p>
            <a href="../assets/Mohamed_Ahmed_Khalifa_CV1.pdf" className="btn btn-primary mt-3" download>
              <FaDownload className="me-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio



