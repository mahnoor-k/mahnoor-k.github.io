import { useState } from "react";

const coursesBySemester = {
  "Fall 2024": [
    {
      name: "Data Structures & Algorithms",
      projects: [
        {
          title: "Graph Traversal Visualizer",
          description: "Interactive visualization tool for BFS and DFS algorithms with step-by-step animation."
        },
        {
          title: "Sorting Algorithm Analyzer",
          description: "Performance comparison tool for various sorting algorithms with complexity analysis."
        }
      ],
      studyGuides: [
        {
          title: "Midterm Study Guide",
          link: "#"
        },
        {
          title: "Final Exam Review",
          link: "#"
        }
      ]
    },
    {
      name: "Software Engineering",
      projects: [
        {
          title: "Team Project Management System",
          description: "Full-stack application for managing software development projects with Git integration."
        }
      ],
      studyGuides: [
        {
          title: "Design Patterns Cheat Sheet",
          link: "#"
        }
      ]
    },
    {
      name: "Database Systems",
      projects: [
        {
          title: "E-commerce Database Design",
          description: "Normalized database schema with complex queries and transaction management."
        }
      ],
      studyGuides: [
        {
          title: "SQL Query Reference",
          link: "#"
        }
      ]
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
          title: "Systems Architecture Notes",
          link: "#"
        }
      ]
    },
    {
      name: "Data C100: Principles & Techniques of Data Science",
      projects: [
        {
          title: "Image Classification Model",
          description: "CNN-based classifier trained on CIFAR-10 dataset with 85% accuracy."
        }
      ],
      studyGuides: [
        {
          title: "ML Concepts Summary",
          link: "#"
        }
      ]
    },
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
          title: "OS Concepts Review",
          link: "#"
        }
      ]
    },
    {
      name: "Data 8: Foundations of Data Science",
      projects: [
        {
          title: "Interactive Dashboard",
          description: "Real-time data visualization dashboard using D3.js and React."
        }
      ],
      studyGuides: [
        {
          title: "Visualization Techniques",
          link: "#"
        }
      ]
    },
    {
      name: "Math 1B: Calculus",
      projects: [],
      studyGuides: [
        {
          title: "Linear Algebra Formula Sheet",
          link: "#"
        }
      ]
    },
    {
      name: "Italian R5B: Reading and Composition",
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
                  return (
                    <div key={idx} className={`course-card ${isExpanded ? "expanded" : ""}`}>
                      <div 
                        className="course-header"
                        onClick={() => toggleCourse(semester, idx)}
                      >
                        <span className="course-name">
                          {isExpanded ? "📂" : "📁"} {course.name}
                        </span>
                        <span className="course-toggle">
                          {isExpanded ? "−" : "+"}
                        </span>
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
