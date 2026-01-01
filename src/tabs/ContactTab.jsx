export default function ContactTab() {
  return (
    <div className="contact-tab">
      <div className="contact-content">
        <div className="contact-prompt">
          <span className="prompt">mahnoor@site:~$</span> contact
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">email:</span>
            <a href="mailto:mahnoor@berkeley.edu" className="contact-link">
              mahnoor@berkeley.edu
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">github:</span>
            <a href="https://github.com/mahnoor" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/mahnoor
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">linkedin:</span>
            <a href="https://linkedin.com/in/mahnoor" target="_blank" rel="noopener noreferrer" className="contact-link">
              linkedin.com/in/mahnoor
            </a>
          </div>
        </div>
        <div className="contact-note">
          <span className="prompt">mahnoor@site:~$</span> Feel free to reach out!
        </div>
      </div>
    </div>
  );
}

