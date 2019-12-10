import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header>
    <a
      target="_blank"
      rel="noopener noreferrer"
      title="instagram/web__addict"
      href="https://github.com/ArturW1998/"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </header>
);

export default Header;
