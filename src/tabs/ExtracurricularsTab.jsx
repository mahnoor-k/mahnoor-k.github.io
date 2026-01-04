const extracurriculars = [
  {
    organization: "PlexTech Software Consulting",
    roles: [
      {
        role: "Advisor",
        date: "Spring 2026"
      },
      {
        role: "Senior Developer",
        date: "Fall 2025"
      },
      {
        role: "External Vice President",
        date: "Spring 2025"
      },
      {
        role: "Junior Developer",
        date: "Fall 2024"
      },
      {
        role: "Curriculum Student",
        date: "Spring 2024"
      }
    ]
  },
  {
    organization: "Software Product @ Cal",
    roles: [
      {
        role: "Director of Consulting, Project Manager",
        date: "Spring 2026"
      },
      {
        role: "Project Manager",
        date: "Fall 2025"
      },
      {
        role: "VP of Marketing, Project Manager",
        date: "Spring 2025"
      },
      {
        role: "Product Consultant",
        date: "Fall 2024"
      }
    ]
  },
  {
    organization: "CS Kickstart",
    roles: [
      {
        role: "Director of Internal",
        date: "Spring 2025-Fall 2025"
      },
      {
        role: "Teaching Assistant",
        date: "Spring 2024-Fall 2024"
      },
      {
        role: "Bootcamp Participant",
        date: "Fall 2023"
      },
    ]
  },
  {
    organization: "Computer Science Mentors",
    roles: [
      {
        role: "Data 88C Senior Content Mentor",
        date: "Spring 2025"
      },
      {
        role: "Data 88C Junior Mentor",
        date: "Fall 2024"
      },
    ]
  },
  {
    organization: "UC Berkeley Residential Life",
    roles: [
      {
        role: "Gold Resident Assistant",
        date: "Fall 2025-Spring 2026"
      },
      {
        role: "Blue Resident Assistant",
        date: "Fall 2024-Spring 2025"
      },
    ]
  }
];

export default function ExtracurricularsTab() {
  return (
    <div className="extracurriculars-tab">
      <div className="extracurriculars-content">
        <div className="extracurriculars-prompt">
          <span className="prompt">mahnoor@portfolio:~$</span> cat extracurricular.txt
        </div>
        <div className="extracurriculars-list">
          {extracurriculars.map((org, orgIdx) => (
            <div key={orgIdx} className="extracurricular-item">
              <div className="extracurricular-org-header">
                <span className="extracurricular-org-name">{org.organization}</span>
              </div>
              <div className="extracurricular-roles">
                {org.roles.map((roleItem, idx) => (
                  <div key={idx} className="extracurricular-role-item">
                    <span className="extracurricular-role">{roleItem.role}</span>
                    <span className="extracurricular-date">{roleItem.date}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
