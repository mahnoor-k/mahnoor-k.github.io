export default function ContactTab() {
  return (
    <div className="contact-tab">
      <div className="contact-content">
        <div className="contact-prompt">
          <span className="prompt">mahnoor@portfolio:~$</span> ping mahnoor
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">email:</span>
            <a href="mailto:mahnoorkhan@berkeley.edu" className="contact-link">
              mahnoorkhan@berkeley.edu
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">linkedin:</span>
            <a href="https://www.linkedin.com/in/mahnoor-f-khan/" target="_blank" rel="noopener noreferrer" className="contact-link">
              linkedin.com/in/mahnoor-f-khan
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">github:</span>
            <a href="https://github.com/mahnoor-k" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/mahnoor-k
            </a>
          </div>
        </div>
        <div className="contact-note">
          <span className="prompt">mahnoor@portfolio:~$</span> Feel free to reach out!
        </div>
      </div>
    </div>
  );
}

