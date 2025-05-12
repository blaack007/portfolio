import { useEffect, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaPhp, FaDatabase, FaDocker, FaGit, FaLinux } from 'react-icons/fa'
import './Skills.css'

function Skills() {
  const skillsRef = useRef(null)
  
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 75 },
    { name: 'Python', icon: <FaPython />, level: 85 },
    { name: 'PHP', icon: <FaPhp />, level: 70 },
    { name: 'SQL/Databases', icon: <FaDatabase />, level: 80 },
    { name: 'Docker', icon: <FaDocker />, level: 65 },
    { name: 'Git', icon: <FaGit />, level: 85 },
    { name: 'Linux', icon: <FaLinux />, level: 75 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When section is visible, add the animation class
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              // Set a delay based on index for staggered animation
              setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
              }, index * 100);
            });
            
            // Disconnect the observer after animation starts
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-5 bg-light" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title mb-5">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: '0%' }} 
                    data-level={skill.level}
                    aria-valuenow={skill.level} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >
                    <span className="progress-value">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills




