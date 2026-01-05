const experiences = [
  {
    role: "Software Engineer (Contract)",
    organization: "Lucid Motors",
    date: "Oct 2025 - Jan 2026",
    description: "Built and fine-tuned monocular depth and 3D perception pipelines for autonomous driving using PyTorch and OpenCV. Automated large-scale model benchmarking and LiDAR-calibrated evaluation to produce accurate, metric-scale 3D reconstructions."
  },
  {
    role: "Product Manager (Contract)",
    organization: "Dropbox",
    date: "Sept 2025 - Dec 2025",
    description: "Led the design of AI-assisted workflow automation tools to scale intern onboarding and applicant tracking. Translated user research and survey insights into technical roadmaps, APIs, and measurable product outcomes."
  },
  {
    role: "Software Engineering Intern",
    organization: "Performance Rotors",
    date: "May 2025 - July 2025",
    description: "Improved wireless communication reliability for drone networks by optimizing video streaming and radio configurations. Used Go, Python, and Linux networking tools to benchmark latency, throughput, and packet loss across real-world flight tests."
  },
  {
    role: "Product & Brand Strategy Intern",
    organization: "QueryHat",
    date: "May 2025 - Present",
    description: "Supported product and go-to-market strategy by analyzing competitors in the LLM-for-data space and identifying high-impact opportunities. Contributed to UI/UX design reviews and built the company’s visual identity through logo design and a comprehensive branding deck."
  },
  {
    role: "ML Engineer (Contract)",
    organization: "Bentley Systems",
    date: "Jan 2025 - May 2025",
    description: "Developed a full-stack analytics and automation platform to streamline grading workflows using React, Node.js, and MongoDB. Applied computer vision and machine learning techniques to reduce manual review time while improving grading accuracy."
  },
  {
    role: "Product Manager (Contract)",
    organization: "guNaka",
    date: "Jan 2025 - May 2025",
    description: "Developed a full-stack analytics and automation platform to streamline grading workflows using React, Node.js, and MongoDB. Applied computer vision and machine learning techniques to reduce manual review time while improving grading accuracy."
  },
  {
    role: "Software Engineer (Contract)",
    organization: "Bentley Systems",
    date: "Aug 2024 - Dec 2024",
    description: "Designed technical CAD coursework for thousands of students and built an interactive full-stack learning platform using React and MongoDB. Developed dynamic, hands-on learning modules with real-time feedback to support self-paced skill development."
  },
  {
    role: "Software Engineering Intern",
    organization: "Better Ballot",
    date: "Aug 2024  - Dec 2025",
    description: "Built a voter education platform with an intuitive React-based interface to simplify ballot information and improve civic understanding. Designed UI/UX in Figma and implemented location-based features to help users find nearby polling places."
  },
  {
    role: "Administrative Student Assistant",
    organization: "UC Berkeley Office of Staff Engagement & Belonging",
    date: "Jan 2024 - Present",
    description: "Analyzed DEIB trends across 40+ UC Berkeley departments to support institutional reporting and data-driven decision-making. Redesigned and maintained a staff-facing website to improve information accessibility, engagement, and participation across campus."
  },
  {
    role: "Administrative Student Assistant",
    organization: "UC Berkeley's CEE Academic Affairs Office",
    date: "Jan 2024 - Present",
    description: "Supported academic operations by designing newsletters, reviewing graduate applications, and coordinating large-scale department events. Built engaging communication materials and managed logistics to improve student outreach."
  },
  
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
                <div className="experience-role">{exp.role}</div>
                <div className="experience-meta">
                  <span className="experience-org">{exp.organization}</span>
                  <span className="experience-date">{exp.date}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

