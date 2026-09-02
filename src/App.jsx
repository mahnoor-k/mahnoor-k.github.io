import { useState, useEffect } from "react";
import TabBar from "./TabBar.jsx";
import Terminal from "./Terminal.jsx";
import HomeTab from "./tabs/HomeTab.jsx";
import AboutTab from "./tabs/AboutTab.jsx";
import ExperienceTab from "./tabs/ExperienceTab.jsx";
import ProjectsTab from "./tabs/ProjectsTab.jsx";
import CoursesTab from "./tabs/CoursesTab.jsx";
import ExtracurricularsTab from "./tabs/ExtracurricularsTab.jsx";
import ContactTab from "./tabs/ContactTab.jsx";
import CS180Tab from "./tabs/CS180Tab.jsx";
import "./styles.css";

const tabs = ["Home", "About", "Experiences", "Projects", "Courses", "Extracurriculars", "Contact"];

export default function App() {
  const [activeTab, setActiveTab] = useState(() =>
    window.location.hash.startsWith("#/cs180") ? "CS 180" : "Home"
  );
  const [theme, setTheme] = useState("dark");
  const [showTerminal, setShowTerminal] = useState(() =>
    !window.location.hash.startsWith("#/cs180")
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith("#/cs180")) {
        setActiveTab("CS 180");
        setShowTerminal(false);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Home":
        return <HomeTab />;
      case "About":
        return <AboutTab />;
      case "Experiences":
        return <ExperienceTab />;
      case "Projects":
        return <ProjectsTab />;
      case "CS 180":
        return <CS180Tab />;
      case "Courses":
        return <CoursesTab />;
      case "Extracurriculars":
        return <ExtracurricularsTab />;
      case "Contact":
        return <ContactTab />;
      default:
        return <HomeTab />;
    }
  };

  const isPortfolio = activeTab === "CS 180";
  const terminalVisible = !isPortfolio || showTerminal;

  return (
    <div className={`app ${theme}`} style={{ minHeight: '100vh', padding: '20px', background: theme === 'dark' ? '#121212' : '#f5f5f5' }}>
      <div className="window-container">
        <div className="window-header">
          <div className="window-controls">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="window-title">mahnoor@portfolio:~$</div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
        
        <TabBar 
          tabs={tabs} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          theme={theme}
        />
        
        <div className={`content-area ${terminalVisible ? "" : "terminal-collapsed"}`}>
          <div className="tab-content">
            {renderTabContent()}
          </div>

          <div className={`terminal-shell ${terminalVisible ? "" : "collapsed"}`}>
            {isPortfolio && (
              <button
                type="button"
                className="terminal-visibility-toggle"
                onClick={() => setShowTerminal((visible) => !visible)}
                aria-expanded={terminalVisible}
              >
                {terminalVisible ? "Hide terminal" : "Show terminal"}
              </button>
            )}
            {terminalVisible && (
              <Terminal
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                theme={theme}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
