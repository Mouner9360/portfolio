import React from 'react';
import './Resume.css';
import resumePdf from './assets/MounerWissaR.pdf';

function Resume() {
  const education = [
    {
      degree: "B.S. Data Science (Computing)",
      school: "New Jersey Institute of Technology (NJIT)",
      year: "Graduated May 2026",
      gpa: "3.5/4.0"
    },
    {
      degree: "Associate Degree, Computer Science",
      school: "Middlesex Community College",
      year: "Graduated May 2023",
      gpa: "3.85/4.0"
    }
  ];

  const experience = [
    {
      title: "Founder",
      company: "Wissa Systems",
      link: "https://wissasystems.com",
      period: "August 2026 - Present",
      responsibilities: [
        "Founded an AI agency that builds and deploys autonomous lead-capturing agents (chatbots, voice agents and email automations) for small businesses",
        "Own the full technical sales cycle: prospecting, discovery calls, live product demos, proposals, closing and client follow-ups",
        "Translate client business problems into scoped technical solutions and communicate requirements, timelines and results to non-technical stakeholders",
        "Built and deployed a social media DM agent for a fitness influencer using the Claude SDK and OpenRouter, automating responses across Instagram and Facebook Messenger on a self-hosted server",
        "Built and deployed an email automation agent for a retreat center, handling inbound inquiries through Gmail and Microsoft integrations",
        "Manage project delivery end to end, from deployment to ongoing support and iteration based on client feedback"
      ]
    },
    {
      title: "Research Assistant",
      company: "VR/AR Lab, NJIT",
      period: "January 2026 - Present",
      responsibilities: [
        "Develop immersive VR/AR simulations using Unity and C#, architecting real-time data synchronization between head-mounted displays and external servers",
        "Maintain system stability across multiple hardware iterations through version control with Git and rigorous debugging of C# scripts"
      ]
    },
    {
      title: "Sales Associate",
      company: "Noa Jewelers",
      period: "October 2021 - October 2022",
      responsibilities: [
        "Drove sales strategy alignment that helped the team exceed targets by 10% for consecutive quarters",
        "Delivered product knowledge training to new hires, improving team consistency and effectiveness",
        "Built customer relationships through consultative selling, matching product recommendations to each client's needs"
      ]
    },
    {
      title: "Team Member",
      company: "Shake Shack",
      period: "2022-2023",
      responsibilities: [
        "Worked in a fast-paced, customer-facing environment while maintaining food safety and quality standards",
        "Collaborated with team members to ensure efficient order fulfillment"
      ]
    }
  ];

  const skills = {
    "AI & Agentic Systems": ["AI Agents", "Multi-Agent Orchestration (Google ADK)", "Agentic RAG", "MCP", "Claude SDK", "OpenRouter", "Gemini", "Voice Agents", "Chatbots", "Prompt Engineering", "Semantic Search", "Vector Embeddings", "Firecrawl", "NLP"],
    "Sales & Communication": ["Technical Sales", "Discovery Calls", "Live Product Demos", "Lead Qualification", "Client Communication", "Requirements Scoping", "Stakeholder Management", "Project Delivery", "Consultative Selling", "Team Training"],
    "Programming Languages": ["Python", "JavaScript", "SQL", "Java", "C/C++", "R", "Bash/Linux", "C# (Unity)", "HTML5", "CSS3"],
    "Machine Learning & Data Science": ["Machine Learning", "Deep Learning", "PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Random Forest", "SHAP", "Time Series Forecasting", "Hyperparameter Tuning", "Pandas", "NumPy", "Data Visualization", "Dash", "Plotly"],
    "Cloud & Big Data": ["Google Cloud Platform (GCP)", "AWS (EC2/S3)", "Docker", "Self-Hosted Deployment", "Apache Hadoop", "HDFS", "MapReduce", "YARN", "ETL Pipelines"],
    "Databases & BI": ["MongoDB Atlas (Vector Search)", "MySQL", "Tableau", "Power BI", "Matplotlib", "Seaborn"],
    "Tools & Technologies": ["Git", "GitHub", "Claude Code", "Composio MCP", "Gmail & Microsoft APIs", "Unity", "React", "GitHub Pages", "Gunicorn", "Render", "VS Code", "FFmpeg", "HyperFrames"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <a href={resumePdf} download="MounerWissa_Resume.pdf" className="resume-download-btn" aria-label="Download Resume">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>

        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="item-company-link">{exp.company}</a>
                      ) : exp.company}{' '}
                      ({exp.period})
                    </p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
