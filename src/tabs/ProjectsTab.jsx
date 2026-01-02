import { useState } from "react";

const projects = [
  {
    title: "Warn Map",
    description: "A full-stack safety visualization tool that helps communities track and visualize safety incidents. Built with real-time data updates and interactive mapping features.",
    tech: ["React", "Node.js", "MongoDB", "Mapbox API"],
    impact: "Helped local communities make data-driven decisions about safety and security."
  },
  {
    title: "We Hear You",
    description: "A Deaf awareness and ASL education platform designed to bridge communication gaps. Features interactive lessons, video tutorials, and community forums.",
    tech: ["React", "Firebase", "WebRTC", "CSS3"],
    impact: "Increased ASL learning accessibility for over 500+ users in the first month."
  },
  {
    title: "TaskFlow",
    description: "A productivity application that combines task management with time tracking. Features intuitive drag-and-drop interfaces and detailed analytics.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL"],
    impact: "Improved team productivity by 30% through better task organization and time insights."
  }
];

export default function ProjectsTab() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="projects-tab">
      <div className="projects-content">
        <div className="projects-prompt">
          <span className="prompt">mahnoor@personal-website:~$</span> ls projects/
        </div>
        <div className="projects-list">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`project-card ${expandedProject === idx ? "expanded" : ""}`}
            >
              <div 
                className="project-header"
                onClick={() => toggleProject(idx)}
              >
                <span className="project-title">
                  {expandedProject === idx ? "📂" : "📁"} {project.title}
                </span>
                <span className="project-toggle">
                  {expandedProject === idx ? "−" : "+"}
                </span>
              </div>
              
              <div className={`project-details ${expandedProject === idx ? "visible" : ""}`}>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <div className="tech-tags">
                    {project.tech.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

