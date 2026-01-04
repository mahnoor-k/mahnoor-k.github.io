import { useState } from "react";

const coursesBySemester = {
  "Fall 2025": [
    {
      name: "CS 161: Computer Security",
      projects: [
        {
          title: "Graph Traversal Visualizer",
          description: "Interactive visualization tool for BFS and DFS algorithms with step-by-step animation."
        },
      ],
      studyGuides: []
    },
    {
      name: "CS 61C: Great Ideas of Computer Architecture (Machine Structures)",
      projects: [],
      studyGuides: []
    },
    {
      name: "CS 194: Decentralized Finance",
      projects: [],
      studyGuides: []
    },
    {
      name: "ENVECON C101: Environmental Economics",
      projects: [],
      studyGuides: []
    },
  ],
  "Summer 2025": [
    {
      name: "ENVECON 176: Climate Change Economics",
      projects: [],
      studyGuides: []
    },
    {
      name: "DIGHUM 100: Theory and Method in the Digital Humanities",
      projects: [],
      studyGuides: []
    },
    {
      name: "NUSCTX W104: Food, Culture, and the Environment AC",
      projects: [],
      studyGuides: []
    },
    {
      name: "UGIS W158: Global Citizenship",
      projects: [],
      studyGuides: []
    },
    {
      name: "HISTORY N100G: Special Topics in History: Study Abroad",
      projects: [],
      studyGuides: []
    },
  ],
  "Spring 2025": [
    {
      name: "EDUC 260: Machine Learning in Education",
      projects: [
        {
          title: "Graph Traversal Visualizer",
          description: "Interactive visualization tool for BFS and DFS algorithms with step-by-step animation."
        },
      ],
      studyGuides: []
    },
    {
      name: "ENVECON C118: Applied Econometrics",
      projects: [],
      studyGuides: []
    },
    {
      name: "CIVENG 93: Engineering Data Analysis",
      projects: [
        {
          title: "E-commerce Database Design",
          description: "Normalized database schema with complex queries and transaction management."
        }
      ],
      studyGuides: [
        {
          title: "Final Cheatsheet",
          link: "#"
        }
      ]
    },
    {
      name: "UGBA 88: Data & Decisions",
      projects: [],
      studyGuides: []
    },
    {
      name: "UGBA 102A: Financial Accounting",
      projects: [],
      studyGuides: []
    },
    {
      name: "ECON 1: Introduction to Economics",
      projects: [],
      studyGuides: []
    },
  ],
  "Fall 2024": [
    {
      name: "CS 70: Discrete Mathematics & Probability Theory",
      projects: [],
      studyGuides: [
        {
          title: "Midterm Cheatsheet",
          link: "#"
        },
        {
          title: "Final Cheatsheet",
          link: "#"
        }
      ]
    },
    {
      name: "CS 198: Web Development",
      projects: [],
      studyGuides: []
    },
    {
      name: "ASAMST 128AC: Muslims in America",
      projects: [],
      studyGuides: []
    },
    {
      name: "GLOBAL 173: International Human Rights",
      projects: [],
      studyGuides: []
    }
  ],
  "Spring 2024": [
    {
      name: "CS 61B: Data Structures",
      projects: [
        {
          title: "Cache Simulator",
          description: "Simulated cache behavior with different replacement policies and associativity levels."
        }
      ],
      studyGuides: [
        {
          title: "Midterm 1 Cheatsheet",
          link: "#"
        },
        {
          title: "Midterm 2 Cheatsheet",
          link: "#"
        },
        {
          title: "Final Cheatsheet",
          link: "#"
        }
      ]
    },
    {
      name: "DATA C100: Principles & Techniques of Data Science",
      projects: [
        {
          title: "Image Classification Model",
          description: "CNN-based classifier trained on CIFAR-10 dataset with 85% accuracy."
        }
      ],
      studyGuides: []
    },
    {
      name: "MATH 54: Linear Algebra",
      projects: [],
      studyGuides: []
    },
    {
      name: "NUSCTX 11: Introduction to Toxicology",
      projects: [],
      studyGuides: []
    }
  ],
  "Fall 2023": [
    {
      name: "CS 61A: The Structure and Interpretation of Computer Programs",
      projects: [
        {
          title: "Process Scheduler",
          description: "Implemented round-robin and priority-based scheduling algorithms."
        }
      ],
      studyGuides: [
        {
          title: "Midterm 1 Cheatsheet",
          link: "#"
        },
        {
          title: "Midterm 2 Cheatsheet",
          link: "#"
        },
        {
          title: "Final Cheatsheet",
          link: "#"
        }
      ]
    },
    {
      name: "DATA 8: Foundations of Data Science",
      projects: [
        {
          title: "Interactive Dashboard",
          description: "Real-time data visualization dashboard using D3.js and React."
        }
      ],
      studyGuides: []
    },
    {
      name: "MATH 1B: Calculus",
      projects: [],
      studyGuides: [
        {
          title: "Midterm 1 Cheatsheet",
          link: "#"
        },
        {
          title: "Midterm 2 Cheatsheet",
          link: "#"
        },
        {
          title: "Final Cheatsheet",
          link: "#"
        }
      ]
    },
    {
      name: "ITALIAN R5B: Reading and Composition",
      projects: [],
      studyGuides: []
    },

  ]
};

export default function CoursesTab() {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourse = (semester, courseIndex) => {
    const key = `${semester}-${courseIndex}`;
    setExpandedCourse(expandedCourse === key ? null : key);
  };

  return (
    <div className="courses-tab">
      <div className="courses-content">
        <div className="courses-prompt">
          <span className="prompt">mahnoor@portfolio:~$</span> ls courses/
        </div>
        <div className="courses-list">
          {Object.entries(coursesBySemester).map(([semester, courseList]) => (
            <div key={semester} className="semester-group">
              <h3 className="semester-title">{semester}</h3>
              <div className="semester-courses">
                {courseList.map((course, idx) => {
                  const courseKey = `${semester}-${idx}`;
                  const isExpanded = expandedCourse === courseKey;
                  const hasProjects = course.projects && course.projects.length > 0;
                  const hasStudyGuides = course.studyGuides && course.studyGuides.length > 0;
                  const isExpandable = hasProjects || hasStudyGuides;
                  
                  return (
                    <div key={idx} className={`course-card ${isExpanded ? "expanded" : ""} ${!isExpandable ? "no-expand" : ""}`}>
                      <div 
                        className={`course-header ${isExpandable ? "expandable" : ""}`}
                        onClick={isExpandable ? () => toggleCourse(semester, idx) : undefined}
                      >
                        <span className="course-name">
                          {isExpandable ? (isExpanded ? "📂" : "📁") : ""} {course.name}
                        </span>
                        {isExpandable && (
                          <span className="course-toggle">
                            {isExpanded ? "−" : "+"}
                          </span>
                        )}
                      </div>
                      
                      <div className={`course-details ${isExpanded ? "visible" : ""}`}>
                        {course.projects && course.projects.length > 0 && (
                          <div className="course-section">
                            <strong className="section-title">Projects:</strong>
                            <ul className="course-projects">
                              {course.projects.map((project, projIdx) => (
                                <li key={projIdx} className="course-project-item">
                                  <span className="project-name">{project.title}</span>
                                  <p className="project-desc">{project.description}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {course.studyGuides && course.studyGuides.length > 0 && (
                          <div className="course-section">
                            <strong className="section-title">Study Guides:</strong>
                            <ul className="study-guides-list">
                              {course.studyGuides.map((guide, guideIdx) => (
                                <li key={guideIdx} className="study-guide-item">
                                  <a href={guide.link} className="study-guide-link" target="_blank" rel="noopener noreferrer">
                                    📄 {guide.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
