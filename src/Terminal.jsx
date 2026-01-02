import { useState, useRef, useEffect } from "react";

export default function Terminal({ activeTab, setActiveTab, theme }) {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) {
      setCommandHistory((prev) => [
        ...prev,
        { type: "command", text: "" },
        { type: "output", text: "" }
      ]);
      return;
    }

    setCommandHistory((prev) => [
      ...prev,
      { type: "command", text: cmd }
    ]);

    let output = [];
    
    switch (trimmedCmd) {
      case "help":
        setCommandHistory((prev) => [
          ...prev,
          { 
            type: "output", 
            text: "help",
            isHelp: true
          }
        ]);
        return;
      case "cd about":
        setActiveTab("About");
        output = ["Navigating to About tab..."];
        break;
      case "cd experiences":
        setActiveTab("Experiences");
        output = ["Navigating to Experiences tab..."];
        break;
      case "cd projects":
        setActiveTab("Projects");
        output = ["Navigating to Projects tab..."];
        break;
      case "cd courses":
        setActiveTab("Courses");
        output = ["Navigating to Courses tab..."];
        break;
      case "cd extracurriculars":
        setActiveTab("Extracurriculars");
        output = ["Navigating to Extracurriculars tab..."];
        break;
      case "cd contact":
        setActiveTab("Contact");
        output = ["Navigating to Contact tab..."];
        break;
      case "clear":
        setCommandHistory([]);
        return;
      default:
        output = [`Command not found: ${cmd}. Type 'help' for available commands.`];
    }

    setCommandHistory((prev) => [
      ...prev,
      { type: "output", text: output }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand("");
    }
  };

  const handleClickableCommand = (cmd) => {
    executeCommand(cmd);
  };

  const availableCommands = [
    "help",
    "cd about",
    "cd experiences",
    "cd projects",
    "cd courses",
    "cd extracurriculars",
    "cd contact",
    "clear"
  ];

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-title">Terminal</span>
      </div>
      
      <div className="terminal-body" ref={terminalRef}>
        {commandHistory.length === 0 && (
          <div className="terminal-welcome">
            <div className="terminal-line">
              <span className="prompt">mahnoor@portfolio:~$</span> Type <span 
                className="clickable-command" 
                onClick={() => handleClickableCommand("help")}
              >help</span> to see available commands.
            </div>
          </div>
        )}
        
        {commandHistory.map((item, idx) => (
          <div key={idx} className="terminal-line">
            {item.type === "command" && (
              <>
                <span className="prompt">mahnoor@portfolio:~$</span> {item.text}
              </>
            )}
            {item.type === "output" && (
              <div className="command-output">
                {item.isHelp ? (
                  <div className="help-output">
                    <div className="help-header">Available commands:</div>
                    <div className="help-command">
                      <span className="help-cmd-name">help</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Show this help message</span>
                    </div>
                    <div className="help-command">
                      <span className="help-cmd-name">cd about</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Navigate to About tab</span>
                    </div>
                    <div className="help-command">
                      <span className="help-cmd-name">cd experiences</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Navigate to Experiences tab</span>
                    </div>
                    <div className="help-command">
                      <span className="help-cmd-name">cd projects</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Navigate to Projects tab</span>
                    </div>
                    <div className="help-command">
                      <span className="help-cmd-name">cd courses</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Navigate to Courses tab</span>
                    </div>
                    <div className="help-command">
                      <span className="help-cmd-name">cd extracurriculars</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Navigate to Activities tab</span>
                    </div>
                    <div className="help-command">
                      <span className="help-cmd-name">cd contact</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Navigate to Contact tab</span>
                    </div>
                    <div className="help-command">
                      <span className="help-cmd-name">clear</span>
                      <span className="help-separator">-</span>
                      <span className="help-desc">Clear terminal history</span>
                    </div>
                  </div>
                ) : Array.isArray(item.text) ? (
                  item.text.map((line, lineIdx) => (
                    <div key={lineIdx}>{line}</div>
                  ))
                ) : (
                  <div>{item.text}</div>
                )}
              </div>
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="terminal-input-form">
          <span className="prompt">mahnoor@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className="terminal-input"
            autoFocus
          />
          <span className={`cursor ${showCursor ? "visible" : ""}`}>█</span>
        </form>
      </div>
      
      <div className="terminal-commands">
        <div className="commands-label">Quick commands:</div>
        <div className="commands-list">
          {availableCommands.map((cmd) => (
            <span
              key={cmd}
              className="clickable-command"
              onClick={() => handleClickableCommand(cmd)}
            >
              {cmd}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
