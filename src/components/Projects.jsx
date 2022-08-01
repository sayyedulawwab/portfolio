import React from 'react';
import projects from '../projects';
function Projects() {
  return (
    <section id="projects">
      <h2>Recent Work</h2>
      <div className="projects">
        {projects.map(project => {
          return (
            <div key={project.title} className="project-card">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.image} alt={project.title} />
              </a>
              <strong>{project.title}</strong>
              <br />
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}{' '}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.built_with && (
                <p className="project-techlist-header">Bulit with:</p>
              )}
              <ul className="project-techlist">
                {project.built_with?.map(technology => {
                  return (
                    <li key={`${project.title}${technology}`}>{technology}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
