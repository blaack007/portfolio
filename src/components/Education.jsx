import './Education.css'

function Education() {
  const education = [
    {
      degree: 'Full-Stack Web Development (Python Track)',
      institution: 'Information Technology Institute (ITI), Egypt',
      year: 'March 2025 - July 2025',
      description: 'Specialized training in full-stack web development with focus on Python, Django, and modern web technologies.'
    },
    {
      degree: 'Bachelor of Business Administration',
      institution: 'Damanhour University, Egypt',
      year: 'Graduated: 2024',
      description: 'Developed strong foundation in business principles, management, and organizational behavior.'
    }
  ]

  const projects = [
    {
      name: 'E-commerce Website Project',
      description: 'Developed a modern E-commerce web application using React and Bootstrap. Implemented responsive design with a user-friendly interface, product catalog, shopping cart functionality, and smooth animations. Features include product filtering, search functionality, and a seamless shopping experience across all devices.',
      liveLink: 'https://e-commerce-steel-three-52.vercel.app/'
    },
    {
      name: 'Movie App Project',
      description: 'Created an interactive movie browsing application using React. Features include movie search, filtering by categories, detailed movie information, and responsive design. Implemented API integration to fetch movie data, state management for user interactions, and modern UI components for an engaging user experience.',
      liveLink: 'https://my-movie-app-five-bay.vercel.app/'
    }
  ]

  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="section-title mb-5">Education & Projects</h2>
        
        <h3 className="mb-4">Education</h3>
        <div className="timeline mb-5">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">{item.degree}</h3>
                  <p className="timeline-subtitle">{item.institution}</p>
                  <p className="timeline-date">{item.year}</p>
                </div>
                <div className="timeline-body">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="mb-4">Technical Projects</h3>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-12 mb-4">
              <div className="project-card">
                <h4 className="project-title">{project.name}</h4>
                <p className="project-description">{project.description}</p>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                    View Live Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="mb-4 mt-5">Certifications</h3>
        <div className="row">
          <div className="col-12">
            <div className="certification-card">
              <h4>Full-Stack Web Development Program</h4>
              <p>Information Technology Institute (ITI)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

