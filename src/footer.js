import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto p-5 text-center">
        <h1>Made With <FontAwesomeIcon icon={faHeart} color="red" /> By Yasser </h1>
      </div>
    </footer>
  );
};

export default Footer;
