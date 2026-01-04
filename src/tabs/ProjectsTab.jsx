import { useState } from "react";

const projects = [
  {
    title: "Pantry Pal",
    description: "A web app that generates recipes from users’ fridge ingredients using AI, helping reduce food waste and simplify meal planning.",
    tech: ["Typescript", "React.js", "Express.js", "Node.js", "Material UI", "Cohere"],
    impact: ""
  },
  {
    title: "Stan 4 Sustainability",
    description: "A web platform that lets users offset celebrities’ carbon footprints by tracking eco-friendly actions, visualizing collective progress through interactive dashboards.",
    tech: ["Typescript", "React.js", "Express.js", "Node.js", "Climatiq", "OpenFoodFacts", "OpenSky"],
    impact: ""
  },
  {
    title: "Warn Map",
    description: "A full-stack safety visualization tool that helps track and visualize safety incidents. Built with real-time data updates and interactive mapping features.",
    tech: ["Typescript", "React.js", "Express.js", "Node.js", "MongoDB"],
    impact: ""
  },
  {
    title: "Campus Wifi Monitor",
    description: "A WiFi monitoring dashboard that lets users submit, store, and visualize real-time WiFi signal strength across UC Berkeley’s campus.",
    tech: ["Typescript", "React.js", "Express.js", "Material UI", "Leaflet.js"],
    impact: ""
  },
  {
    title: "We Hear You",
    description: "A Deaf awareness and ASL education platform designed to bridge communication gaps. Features interactive lessons, video tutorials, and community forums.",
    tech: ["HTML", "CSS", "Javascript"],
    impact: ""
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
          <span className="prompt">mahnoor@portfolio:~$</span> ls projects/
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
                
                {/* <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

