//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectCard({ image, title, description, projectUrl, projectGitUrl }) {
  return (
    <div className="project-card">

<a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="project-image" />
</a>
<a href={projectGitUrl} target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faGithub}  size="2x" /> </a>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;