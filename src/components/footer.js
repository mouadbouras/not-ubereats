import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <div className="footer mt-4 mb-4">
    <div className="text-center">
      Original creator &nbsp;
      <a
        href="https://www.linkedin.com/in/randynsingh/"
        target="_blank"
        rel="noreferrer"
      >
        Randy Singh
      </a>
      <br />
      Montreal version by &nbsp;
      <a
        href="https://ca.linkedin.com/in/mouadbouras"
        target="_blank"
        rel="noreferrer"
      >
        Mouad Bouras
      </a>{" "}
      <br /> Images are property of their respective owners
    </div>
  </div>
);

export default Footer;
