import profilePic from '../assets/propic.jpg';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';'@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

export default function About () {
  return (
    <div>
      <h1>About Me</h1>

      <p className="separator"> ______
        <FontAwesomeIcon icon={faNetworkWired} />
        ______
        <FontAwesomeIcon icon={faLaptop} />
        ______
        <FontAwesomeIcon icon={faNetworkWired} />
        ______
      </p>

      <img className="profile-picture" src={profilePic} alt="Profile"  />

      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
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

    </div>
  );
}
