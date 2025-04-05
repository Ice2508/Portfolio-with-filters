import React from 'react';

function ProjectList({ projects}) {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;