import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      school: "New Jersey Institute of Technology",
      year: "2022-2026",
      gpa: "3.5/4.0"
    }
  ];

  const experience = [
    {
      title: "Sales Associate",
      company: "NOA Jewelers",
      period: "2023",
      responsibilities: [
        "Assisted customers with selecting jewelry and provided product recommendations",
        "Managed inventory and organized display cases to attract customers",
        "Processed sales transactions and handled customer inquiries"
      ]
    },
    {
      title: "Team Member",
      company: "Shake Shack",
      period: "2022-2023",
      responsibilities: [
        "Prepared food items following company recipes and quality standards",
        "Worked in a fast-paced environment while maintaining food safety practices",
        "Collaborated with team members to ensure efficient order fulfillment"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "Java", "HTML5", "CSS3"],
    "AI & Data Science": ["Machine Learning", "Deep Learning", "AI Agents", "RAG", "NLP", "Prompt Engineering", "Data Visualization", "Time Series Forecasting", "Dash", "Plotly", "Pandas", "scikit-learn"],
    "Big Data & Cloud": ["Apache Hadoop", "HDFS", "MapReduce", "YARN", "AWS EC2"],
    "Tools & Technologies": ["MongoDB", "Git", "MCP", "Google GenAI", "VS Code", "Gunicorn", "Render", "React", "GitHub Pages", "Claude Code", "PyTorch", "TensorFlow"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

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
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
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
