import { useEffect, useState } from "react";

const projects = [
  { id: 0, title: "Becoming Friends with Your Camera", status: "In progress" },
];

const projectAsset = (filename) =>
  `${import.meta.env.BASE_URL}assets/cs180/project0/${filename}`;

const getRoute = () => {
  const match = window.location.hash.match(/^#\/cs180\/project-(\d+)$/);
  return match ? Number(match[1]) : null;
};

function MediaPlaceholder({ label, hint }) {
  return (
    <div className="cs180-media-placeholder" role="img" aria-label={`${label} placeholder`}>
      <span className="cs180-placeholder-icon">▧</span>
      <strong>{label}</strong>
      <small>{hint}</small>
    </div>
  );
}

function ProjectZero({ onBack }) {
  const printProject = () => {
    const cleanup = () => document.body.classList.remove("printing-cs180");

    document.body.classList.add("printing-cs180");
    window.addEventListener("afterprint", cleanup, { once: true });
    window.print();
  };

  return (
    <article className="cs180-project-page">
      <button className="cs180-back" onClick={onBack}>← All projects</button>
      <header className="cs180-project-hero">
        <span className="cs180-kicker">CS 180 · Project 0</span>
        <h1>Becoming Friends with Your Camera</h1>
        <p>
          The goal of this project is to get you some intuitive understanding of the somewhat
          subtle relationship between perspective, focal length/zoom, and the center of projection.
        </p>
      </header>

      <section className="cs180-section">
        <div className="cs180-section-number">01</div>
        <div className="cs180-section-copy">
          <h2>Selfie: the wrong way vs. the right way</h2>
          <p>
            The first picture taken with the camera being close to the face exaggerates 
            the middle of the face, or facial features nearest to the camera. However, after 
            stepping away and zooming in, the portrait looks more natural since the increased 
            physical distance takes away perspective distortion and the facial features closest 
            to the camera are not as exaggerated.
          </p>
        </div>
        <div className="cs180-comparison-grid">
          <figure className="cs180-photo-card">
            <img
              src={projectAsset("selfie-close-up.jpeg")}
              alt="Close-up portrait demonstrating wide-angle perspective distortion"
            />
            <figcaption>Close-up portrait</figcaption>
          </figure>
          <figure className="cs180-photo-card">
            <img
              src={projectAsset("selfie-stepped-back.jpeg")}
              alt="Portrait taken from farther away with a longer focal length"
            />
            <figcaption>Stepped-back, zoomed-in portrait</figcaption>
          </figure>
        </div>
      </section>

      <section className="cs180-section">
        <div className="cs180-section-number">02</div>
        <div className="cs180-section-copy">
          <h2>Architectural perspective compression</h2>
          <p>
            Taking the picture from farther away, Wheeler looks flatter, while moving closer
            and zooming out restores more depth in the photo. In the farther, zoomed in picture,
            the relative difference between the camera’s distance to the nearer and farther parts of 
            Wheeler is smaller, so objects at different depths appear more similar in size.
            In the closer, zoomed-out image, nearby features seems larger relative to the further  
            features, producing a stronger sense of depth and perspective. 
          </p>
        </div>
        <div className="cs180-comparison-grid">
          <figure className="cs180-photo-card">
            <img
              src={projectAsset("architecture-far-zoomed.jpeg")}
              alt="Wheeler hall photographed from farther away with a longer focal length"
            />
            <figcaption>Far + zoomed in</figcaption>
          </figure>
          <figure className="cs180-photo-card">
            <img
              src={projectAsset("architecture-near-wide.jpeg")}
              alt="Wheeler hall photographed from nearby with a wider field of view"
            />
            <figcaption>Near + zoomed out</figcaption>
          </figure>
        </div>
      </section>

      <section className="cs180-section">
        <div className="cs180-section-number">03</div>
        <div className="cs180-section-copy">
          <h2>The dolly zoom</h2>
          <p>
            I moved the camera backward while zooming in to keep the octopus approximately
            the same size. 
          </p>
        </div>
        <figure className="cs180-photo-card cs180-gif-card">
          <img
            src={projectAsset("dolly-zoom.gif")}
            alt="Four-frame dolly zoom animation"
          />
          <figcaption>Dolly zoom sequence</figcaption>
        </figure>
      </section>

      <button
        type="button"
        className="cs180-print-button"
        onClick={printProject}
      >
        Save project as PDF
      </button>
    </article>
  );
}

export default function CS180Tab() {
  const [selectedProject, setSelectedProject] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => setSelectedProject(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openProject = (id) => {
    window.location.hash = `#/cs180/project-${id}`;
    setSelectedProject(id);
  };

  const showPortfolio = () => {
    window.location.hash = "#/cs180";
    setSelectedProject(null);
  };

  if (selectedProject === 0) return <ProjectZero onBack={showPortfolio} />;

  return (
    <div className="cs180-tab">
      <header className="cs180-hero">
        <div>
          <span className="cs180-kicker">UC Berkeley · Fall 2026</span>
          <h1>CS 180</h1>
          <p>Introduction to Computer Vision &amp; Computational Photography</p>
        </div>
        <div className="cs180-camera-mark" aria-hidden="true">◎</div>
      </header>

      <div className="cs180-prompt"><span className="prompt">mahnoor@portfolio:~$</span> ls cs180/projects/</div>
      <div className="cs180-project-grid">
        {projects.map((project) => (
          <button key={project.id} className="cs180-project-card" onClick={() => openProject(project.id)}>
            <span className="cs180-project-index">0{project.id}</span>
            <span className="cs180-project-card-body">
              <strong>Project {project.id}</strong>
              <span>{project.title}</span>
            </span>
            <span className={`cs180-status ${project.id === 0 ? "active" : ""}`}>{project.status}</span>
            <span className="cs180-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
