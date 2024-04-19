//import React from 'react';

function ProjectCard({ image, title, description, projectUrl }) {
  return (
    <div className="project-card">

<a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="project-image" />
</a>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;