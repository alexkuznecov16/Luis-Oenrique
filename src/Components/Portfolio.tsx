import React, { useState } from 'react';
import project_1 from '../assets/project-1.png';
import project_2 from '../assets/project-2.png';
import project_3 from '../assets/project-3.png';
import project_4 from '../assets/project-4.png';
import project_5 from '../assets/project-5.png';
import project_6 from '../assets/project-6.png';
import project_7 from '../assets/project-7.png';
import project_8 from '../assets/project-8.png';
import project_9 from '../assets/project-9.png';

const MAX_PROJECTS = 9; // Set your maximum number of projects

const Portfolio: React.FC = () => {
  const [displayedProjects, setDisplayedProjects] = useState(6); // Initial number of displayed projects
  const projects_block = React.useRef();

  const handleShowMore = () => {
    if (displayedProjects < MAX_PROJECTS) {
      const newProjects = [project_7, project_8, project_9];
      setDisplayedProjects((prev) => prev + newProjects.length);

      newProjects.forEach((project, index) => {
        const newProjectElement = document.createElement('div');
        newProjectElement.className = 'Portfolio-item item';
        newProjectElement.innerHTML = `<img src=${project} alt="Project ${displayedProjects + index + 1}" />`;

        projects_block.current.appendChild(newProjectElement);
      });
    }
  };

  return (
    <div id='portfolio' className="Portfolio">
      <div className="container">
        <h3 className="Portfolio-name section-name">POR<span>TFO</span>LIO</h3>
        <div ref={projects_block} className="Portfolio__inner">
          {[project_1, project_2, project_3, project_4, project_5, project_6]
            .slice(0, displayedProjects)
            .map((project, index) => (
              <div className="Portfolio-item item" key={index}>
                <img src={project} alt={`Project ${index + 1}`} />
              </div>
            ))}
        </div>
        {displayedProjects < 9 ? <button onClick={handleShowMore}>LOAD MORE</button> :  ''}
      </div>
    </div>
  );
};

export default Portfolio;
