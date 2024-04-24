import ProjectList from '../components/ProjectList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';



export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>


      <p className="separator"> ______
        <FontAwesomeIcon icon={faGraduationCap} />
        ______
        <FontAwesomeIcon icon={faLaptop} />
        ______
        <FontAwesomeIcon icon={faBriefcase} />
        ______
      </p>
      
      
      
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. 
      </p>

      <div className="blue-separator">
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
      </div>

      <h1>My Projects</h1>
<div className="project-list">
      <ProjectList />
</div>

<div className="blue-separator">
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
      </div>

    </div>
  );
}
