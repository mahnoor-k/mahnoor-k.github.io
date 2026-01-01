const extracurriculars = [
  {
    role: "Senior Developer",
    organization: "PlexTech",
    date: "Fall 2024 - Present",
    description: "Leading development of core platform features and mentoring junior developers. Architecting scalable solutions and driving technical decisions for the organization."
  },
  {
    role: "External Vice President",
    organization: "PlexTech",
    date: "Spring 2024 - Fall 2024",
    description: "Managed external partnerships and relationships with industry sponsors. Organized networking events and facilitated connections between members and tech companies."
  },
  {
    role: "Junior Developer",
    organization: "PlexTech",
    date: "Fall 2023 - Spring 2024",
    description: "Developed web applications and contributed to team projects. Collaborated with senior developers to build full-stack solutions using modern technologies."
  },
  {
    role: "Curriculum Student",
    organization: "PlexTech",
    date: "Spring 2023 - Fall 2023",
    description: "Completed comprehensive software engineering curriculum covering full-stack development, system design, and best practices. Built multiple projects demonstrating technical skills."
  }
];

export default function ExtracurricularsTab() {
  return (
    <div className="extracurriculars-tab">
      <div className="extracurriculars-content">
        <div className="extracurriculars-prompt">
          <span className="prompt">mahnoor@site:~$</span> extracurriculars
        </div>
        <div className="extracurriculars-list">
          {extracurriculars.map((item, idx) => (
            <div key={idx} className="extracurricular-item">
              <div className="extracurricular-header">
                <span className="extracurricular-role">{item.role}</span>
                <span className="extracurricular-org">@ {item.organization}</span>
                <span className="extracurricular-date">{item.date}</span>
              </div>
              <p className="extracurricular-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

