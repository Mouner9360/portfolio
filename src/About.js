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
              <span className="skill-tag">Dash</span>
              <span className="skill-tag">Plotly</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">GitHub Pages</span>
              <span className="skill-tag">Claude Code</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Hadoop</span>
              <span className="skill-tag">HDFS</span>
              <span className="skill-tag">MapReduce</span>
              <span className="skill-tag">AWS EC2</span>
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Deep Learning</span>
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">scikit-learn</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
