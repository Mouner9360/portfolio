import { Component } from 'react';
import './Portfolio.css';
import projectsData from './data/projects.json';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectsData
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="projects-container">
          {this.state.projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <img src="https://via.placeholder.com/400x200" alt={project.name} />
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
                <div className="project-buttons">
                  {project.live && (
                    <a href={project.live} className="btn live-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
                  {project.github && (
                    <a href={project.github} className="btn code-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
