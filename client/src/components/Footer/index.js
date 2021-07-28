import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <div className="footer pt-5">
        <div className="p-1 size-md">
          <h4>Alexandra Hurst</h4>
          <a
            href="https://www.linkedin.com/in/alexandra-hurst-28b185130"
            target="_blank"
            alt="linkedIn"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="4x"
              style={{ color: "white" }}
              className="icon"
            />
          </a>
          <a
            href="https://github.com/AlNHurst"
            target="_blank"
            alt="github"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="4x"
              style={{ color: "white" }}
              className="icon"
            />
          </a>
        </div>
      </div>
      <div className="footer pt-5">
        <div className="p-1 size-md">
          <h4>Jess Greene</h4>

          <a
            href="https://www.linkedin.com/in/jess-greene-241139211/"
            target="_blank"
            alt="linkedIn"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="4x"
              style={{ color: "white" }}
              className="icon"
            />
          </a>
          <a
            href="https://github.com/jessgreene9"
            target="_blank"
            alt="github"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="4x"
              style={{ color: "white" }}
              className="icon"
            />
          </a>
        </div>
      </div>
      <span className="copy">
        &copy; 2021 Alexandra Hurst & Jess Greene
      </span>
    </div>
  );
};

export default Footer;
