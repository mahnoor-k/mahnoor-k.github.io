import { useState, useEffect } from "react";

export default function HomeTab() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-tab">
      <div className="home-content">
        <h1 className="home-headline">
          Hi, I'm Mahnoor.
          <span className={`blink-cursor ${showCursor ? "visible" : ""}`}>█</span>
        </h1>
        <p className="home-subtext">
          Computer Science, Data Science, and Environmental Economics @ UC Berkeley.
        </p>
        <div className="home-prompt">
          <span className="prompt">mahnoor@portfolio:~$</span> welcome
        </div>
      </div>
    </div>
  );
}

