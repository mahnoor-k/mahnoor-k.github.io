const extracurriculars = {
  organization: "PlexTech",
  roles: [
    {
      role: "Senior Developer",
      date: "Fall 2024 - Present"
    },
    {
      role: "External Vice President",
      date: "Spring 2024 - Fall 2024"
    },
    {
      role: "Junior Developer",
      date: "Fall 2023 - Spring 2024"
    },
    {
      role: "Curriculum Student",
      date: "Spring 2023 - Fall 2023"
    }
  ]
};

export default function ExtracurricularsTab() {
  return (
    <div className="extracurriculars-tab">
      <div className="extracurriculars-content">
        <div className="extracurriculars-prompt">
          <span className="prompt">mahnoor@site:~$</span> extracurriculars
        </div>
        <div className="extracurriculars-list">
          <div className="extracurricular-item">
            <div className="extracurricular-org-header">
              <span className="extracurricular-org-name">{extracurriculars.organization}</span>
            </div>
            <div className="extracurricular-roles">
              {extracurriculars.roles.map((roleItem, idx) => (
                <div key={idx} className="extracurricular-role-item">
                  <span className="extracurricular-role">{roleItem.role}</span>
                  <span className="extracurricular-date">{roleItem.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
