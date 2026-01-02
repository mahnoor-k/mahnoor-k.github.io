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
import "./styles.css";

const tabs = ["Home", "About", "Experiences", "Projects", "Courses", "Extracurriculars", "Contact"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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

  return (
    <div className={`app ${theme}`} style={{ minHeight: '100vh', padding: '20px', background: theme === 'dark' ? '#121212' : '#f5f5f5' }}>
      <div className="window-container">
        <div className="window-header">
          <div className="window-controls">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="window-title">mahnoor@personal-website:~$</div>
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
        
        <div className="content-area">
          <div className="tab-content">
            {renderTabContent()}
          </div>
          
          <Terminal 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}
