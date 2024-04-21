import ContactForm from '../components/ContactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <p className="separator"> ______
        <FontAwesomeIcon icon={faNetworkWired} />
        ______
        <FontAwesomeIcon icon={faLaptop} />
        ______
        <FontAwesomeIcon icon={faNetworkWired} />
        ______
      </p>


      <div className="contact-icons">
        <div className="icon-container">
          <a href="mailto:tydamon@hotmail.com" className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <p>Email</p>
        </div>

        <div className="icon-container">
          <a href="https://github.com/sifzerda" className="icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <p>GitHub</p>
        </div>

        <div className="icon-container">
          <a href="https://github.com/sifzerda" className="icon">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <p>LinkedIn</p>
        </div>

        <div className="icon-container">
          <a href="https://github.com/sifzerda" className="icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <p>Facebook</p>
        </div>


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

      <div className="form-box">

        <h1>Leave A Message</h1>
        <ContactForm />
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
