import './About.css';
import profileImg from './assets/profile.jpg';

function About() {
  return (
    <div className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img
            src={profileImg || 'https://via.placeholder.com/280x320'}
            alt="Mounir Wissa"
          />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Mounir Wissa, a Data Science graduate from NJIT (May 2026).
            I have a strong passion for Artificial Intelligence and AI Engineering. I enjoy
            building smart solutions and learning how machines can understand and process data.
          </p>
          <p>
            I'm also the founder of{' '}
            <a href="https://wissasystems.com" target="_blank" rel="noopener noreferrer">Wissa Systems</a>,
            an AI agency where I build and deploy chatbots, voice agents and automations for real
            businesses. I handle the whole process myself: the sales conversations, scoping the problem
            with the client, building the system, and supporting it after launch.{' '}
            <a href="https://wissasystems.com/demos" target="_blank" rel="noopener noreferrer">Try the live demos</a>.
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
            <span className="skill-tag">Video Editing</span>
            <span className="skill-tag">FFmpeg</span>
            <span className="skill-tag">Motion Graphics</span>
            <span className="skill-tag">HyperFrames</span>
            <span className="skill-tag">Composio MCP</span>
            <span className="skill-tag">Claude SDK</span>
            <span className="skill-tag">Google ADK</span>
            <span className="skill-tag">OpenRouter</span>
            <span className="skill-tag">Voice Agents</span>
            <span className="skill-tag">GCP</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">XGBoost</span>
            <span className="skill-tag">Unity (C#)</span>
            <span className="skill-tag">Technical Sales</span>
            <span className="skill-tag">Client Communication</span>
            <span className="skill-tag">Product Demos</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
