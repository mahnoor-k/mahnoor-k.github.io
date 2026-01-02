const experiences = [
  {
    role: "Software Engineering Intern",
    organization: "UC Berkeley",
    date: "Summer 2024",
    description: "Built internal tools to support staff engagement and streamline workflows. Worked with React, Node.js, and MongoDB to deliver scalable solutions."
  },
  {
    role: "Resident Assistant",
    organization: "University Housing",
    date: "Fall 2023 - Spring 2024",
    description: "Led community-building initiatives and managed events. Facilitated conflict resolution and created inclusive living environments for diverse student populations."
  },
  {
    role: "Teaching Assistant",
    organization: "Computer Science Department",
    date: "Fall 2023",
    description: "Assisted students in understanding fundamental programming concepts. Graded assignments and provided one-on-one support during office hours."
  }
];

export default function ExperienceTab() {
  return (
    <div className="experience-tab">
      <div className="experience-content">
        <div className="experience-prompt">
          <span className="prompt">mahnoor@portfolio:~$</span> cat experiences.log
        </div>
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-header">
                <span className="experience-role">{exp.role}</span>
                <span className="experience-org">@ {exp.organization}</span>
                <span className="experience-date">{exp.date}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

