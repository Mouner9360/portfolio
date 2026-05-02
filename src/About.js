import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://via.placeholder.com/280x320" alt="Mounir Wissa" />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Mounir Wissa, a Data Science student at NJIT graduating in May 2026.
              I have a strong passion for Artificial Intelligence and AI Engineering. I enjoy
              building smart solutions and learning how machines can understand and process data.
            </p>
            <p>
              I am currently exploring areas like AI agents, prompt engineering, and retrieval
              augmented generation. I like working on projects that combine machine learning
              with real-world applications and I am always looking to improve my skills.
            </p>
            <h3>Skills & Technologies</h3>
            <div className="skills-tags">
              <span className="skill-tag">AI Agents</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">RAG</span>
              <span className="skill-tag">MCP</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Data Visualization</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
