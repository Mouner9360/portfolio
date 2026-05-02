import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "https://via.placeholder.com/400x200",
          title: "AI Multi-Agent Web Research System",
          description: "A system of three AI agents that work together to search the web. A coordinator agent receives the user query, a researcher agent uses MCP Firecrawl to gather information, and a summarizer agent compiles the results.",
          technologies: ["Python", "AI Agents", "MCP", "Firecrawl"],
        },
        {
          project_image: "https://via.placeholder.com/400x200",
          title: "AI RAG Agent with MongoDB",
          description: "A retrieval augmented generation agent that uses MongoDB as a database and Google GenAI to convert text to vectors. It uses vector index search and a custom tool to transform user queries for comparison.",
          technologies: ["Python", "MongoDB", "Google GenAI", "Vector Search"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="projects-container">
          {this.state.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.project_image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href="#" className="btn live-btn">Live Demo</a>
                  <a href="#" className="btn code-btn">View Code</a>
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
