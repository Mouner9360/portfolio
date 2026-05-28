import './Portfolio.css';
import projectsData from './data/projects.json';
import projectImages from './assets/projects/index';

function Portfolio() {
  const getProjectImage = (project) => {
    // 1. Local asset (if mapped)
    if (projectImages[project.id]) return projectImages[project.id];
    // 2. URL from JSON
    if (project.image) return project.image;
    // 3. null -> use gradient placeholder
    return null;
  };

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="projects-container">
        {projectsData.map((project) => {
          const imgSrc = getProjectImage(project);
          return (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {imgSrc ? (
                  <img src={imgSrc} alt={project.name} />
                ) : (
                  <div className="project-image-placeholder">
                    {project.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                {project.skills && project.skills.length > 0 && (
                  <div className="project-skills">
                    <h4 className="skills-label">Skills</h4>
                    <div className="skills-list">
                      {project.skills.map((skill, i) => (
                        <span className="skill-tag" key={i}>{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="project-buttons">
                  {project.live && (
                    <a href={project.live} className="btn live-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
                  {project.github && (
                    <a href={project.github} className="btn code-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                  )}
                  {project.video && (
                    <a href={project.video} className="btn video-btn" target="_blank" rel="noopener noreferrer">Watch Video</a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
