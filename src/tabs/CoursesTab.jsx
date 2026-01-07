import { useState } from "react";

const coursesBySemester = {
  "Fall 2025": [
    {
      name: "CS 161: Computer Security",
      projects: [
        {
          title: "Exploiting Memory Safety Vulnerabilities",
          description: "Exploited memory vulnerabilities in C programs using stack analysis, GDB, and crafted payloads to bypass canaries and ASLR."
        },
        {
          title: "A Secure File Sharing System",
          description: "Designed an end‑to‑end encrypted file‑sharing system with strong confidentiality, integrity, and access control, supporting secure sharing, appending, and revocation."
        },
        {
          title: "Breaching a Vulnerable Web Server",
          description: "Identified and exploited web vulnerabilities including SQL injection, XSS, CSRF, and path traversal to bypass authentication, steal tokens, and access protected files, while evaluating corresponding defenses."
        },
      ],
      studyGuides: []
    },
    {
      name: "CS 61C: Great Ideas of Computer Architecture (Machine Structures)",
      projects: [
        {
          title: "snek",
          description: "Implemented a Snake game from scratch in C, focusing on manual memory management, pointer manipulation, and systems-level debugging."
        },
        {
          title: "CS61Classify",
          description: "Coded a classifier for handwritten digits in RISC-V assembly, focusing on calling conventions, heap allocation, file I/O, and low-level testing."
        },
        {
          title: "CS61CPU",
          description: "Built a functional CPU in Logisim that executes RISC-V instructions, implementing datapaths, control logic, and instruction execution."
        },
      ],
      studyGuides: [
        {
          title: "Final Study Guide",
          link: "https://drive.google.com/file/d/1FWv4Lnvg-1O-Nq_s1_EnlALxOXmPgm2o/view?usp=sharing"
        } 
      ]
    },
    {
      name: "CS 194: Decentralized Finance",
      projects: [
        {
          title: "Flash Loan Liquidator: Aave × Uniswap DeFi Bot",
          description: "Implemented a Solidity smart contract that uses Uniswap flash swaps to liquidate undercollateralized Aave positions and capture on-chain profit."
        }
      ],
      studyGuides: []
    },
    {
      name: "ENVECON C101: Environmental Economics",
      projects: [],
      studyGuides: [
        {
          title: "Final Study Guide",
          link: "https://drive.google.com/file/d/15NLNxKm-yM1rUHjzfvofkGBvEEl2bxU9/view?usp=sharing"
        } 
      ]
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
      projects: [
        {
          title: "Making the Invisible Visible: First‑Generation Student Experience",
          description: "Examined first‑generation student experiences through data, narratives, and ethical digital design to reveal institutional barriers to equity and timely graduation."
        }
      ],
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
      projects: [
        {
          title: "Surrendered Spaces: Wartime Life in Occupied Singapore",
          description: "Created an interactive website exploring everyday civilian experiences during the Japanese Occupation of Singapore through maps, timelines, and firsthand voices."
        }
      ],
      studyGuides: []
    },
  ],
  "Spring 2025": [
    {
      name: "EDUC 260: Machine Learning in Education",
      projects: [
        {
          title: "Serendegree: A Degree Suggestion System for Transfer Students",
          description: "Built an open-source degree recommender for transfer students using vector embeddings and LLMs to suggest programs based on completed courses."
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
          title: "Data Analysis of Boba Shops in the Bay",
          description: "Performed a data-driven study of Bay Area boba shops, uncovering trends in cost, ratings, and value with regression and statistical modeling."
        }
      ],
      studyGuides: [
        {
          title: "Final Study Guide",
          link: "https://drive.google.com/file/d/1yjaLn0iWfpzy-08tCocPTGQkq5x7HNaj/view?usp=sharing"
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
      studyGuides: [
        {
          title: "Final Study Guide",
          link: "https://drive.google.com/file/d/17ZcD0TfMPwSkvRVn7qTx6zExlDy-bpk_/view?usp=sharing"
        }
      ]
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
        // {
        //   title: "Midterm Cheatsheet",
        //   link: "#"
        // },
        {
          title: "Final Cheatsheet",
          link: "https://drive.google.com/file/d/1Y_aDEOgLb2YxtosD_DauHfcxo7Q8h-q4/view?usp=sharing"
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
          title: "2048",
          description: "Implemented the core logic for a playable 2048 game in Java with a GUI to create a fully interactive game experience."
        },
        {
          title: "LinkedListDeque61B",
          description: "Built a generic, circular doubly-linked list deque in Java with constant-time add, remove, and get operations. Verified correctness with unit tests."
        },
        {
          title: "ArrayDeque61B",
          description: "Implemented a generic, dynamically resizing array deque in Java with circular indexing and constant-time operations. Ensured reliability through targeted tests."
        },
        {
          title: "Ngordnet",
          description: "Built Java backend for analyzing historical word usage and WordNet hyponyms, including data structures for time series and custom graph-based queries."
        },
        {
          title: "World Generation",
          description: "Developed a 2D puzzle-platformer with interactive levels, collectible items, player movement mechanics, and a GUI with real-time updates."
        }
      ],
      studyGuides: [
        // {
        //   title: "Midterm 1 Cheatsheet",
        //   link: "#"
        // },
        // {
        //   title: "Midterm 2 Cheatsheet",
        //   link: "#"
        // },
        {
          title: "Final Cheatsheet",
          link: "https://drive.google.com/file/d/1Lrk216eGP_sm4ostKfdSiDcszSBqz0Up/view?usp=sharing"
        }
      ]
    },
    {
      name: "DATA C100: Principles & Techniques of Data Science",
      projects: [
        {
          title: "Predicting Housing Prices in Cook County",
          description: "Built and evaluated a linear regression pipeline to predict Cook County housing prices, incorporating feature engineering, cross-validation, and fairness analysis to assess regressive bias in property tax assessments."
        },
        {
          title: "Spam/Ham Classification",
          description: "Built an interpretable spam-email classifier using logistic regression with custom text feature engineering, ROC analysis, and cross-validation to balance accuracy, false positives, and real-world tradeoffs."
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
          title: "The Game of Hog",
          description: "Built a Python simulator for the dice game Hog, implementing scoring rules, turn strategies, and higher-order functions to optimize gameplay."
        },
        {
          title: "Computer Aided Typing Software",
          description: "Developed a typing test application featuring WPM calculation, accuracy tracking, and autocorrect using recursive diff functions."
        },
        {
          title: "Scheme Interpreter",
          description: "Built a Python Scheme interpreter enabling evaluation of expressions, user-defined procedures, and special forms."
        }
      ],
      studyGuides: [
        // {
        //   title: "Final Cheatsheet",
        //   link: "#"
        // }
      ]
    },
    {
      name: "DATA 8: Foundations of Data Science",
      projects: [
        {
          title: "World Population and Poverty",
          description: "Analyzed global population growth and extreme poverty trends using Gapminder data, building data pipelines, visualizations, and interactive analysis."
        },
        {
          title: "Climate Change",
          description: "Analyzed climate change trends using global temperature and precipitation data, applying data cleaning, aggregation, and visualization to study long-term patterns and regional variability."
        },
        {
          title: "Movie Classification",
          description: "Built a text-based movie genre classifier by engineering word-count features from screenplays and training a k-nearest neighbors model to distinguish comedies from thrillers."
        }
      ],
      studyGuides: []
    },
    {
      name: "MATH 1B: Calculus",
      projects: [],
      studyGuides: [
        // {
        //   title: "Midterm 1 Cheatsheet",
        //   link: "#"
        // },
        // {
        //   title: "Midterm 2 Cheatsheet",
        //   link: "#"
        // },
        // {
        //   title: "Final Cheatsheet",
        //   link: "#"
        // }
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
