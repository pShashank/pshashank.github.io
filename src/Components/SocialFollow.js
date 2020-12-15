import React from "react";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a
        href="https://www.linkedin.com/in/shashank-penukonda/"
        className="linekdin social icon"
      >
        <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
      </a>
      <a href="https://github.com/pShashank" className="github social icon">
        <FontAwesomeIcon icon={faGithub} size="1.5x" />
      </a>
      <a
        href="https://www.facebook.com/shashank82/"
        className="facebook social icon"
      >
        <FontAwesomeIcon icon={faFacebook} size="1.5x" />
      </a>
      <a href="https://twitter.com/ShankIsHere" className="twitter social icon">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
    </div>
  );
}
