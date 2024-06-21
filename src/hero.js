import React from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="flex items-center py-5 h-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start md:items-start text-left p-8">
          <p className="text-xl ">Hey There, Im</p>
          <h1 className="text-4xl font-bold mb-2">Yasser Aziz Alfalah</h1>
          <div className="border-b-4 border-black w-full"></div>
          <div className="flex justify-between">
            <div className="pt-3 flex justify-between">
              <div className="outline rounded">
                <a href="https://www.linkedin.com/in/yasser-aziz-alfalah/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-7 w-7 px-5 py-4"
                  />
                </a>
              </div>
              <div className="outline rounded mx-3">
                <a href="https://github.com/Yasser021">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-7 w-7 px-5 py-4"
                  />
                </a>
              </div>
              <div className="outline rounded ">
                <a href="https://www.instagram.com/nonzz.__/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="h-7 w-7 px-5 py-4"
                  />
                </a>
              </div>
            </div>
            <div className="flex">
              <button></button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center p-8">
          {/* <img
            src={photo}
            alt="Yasser Aziz Alfalah"
            className="rounded-full h-64 w-64 object-cover shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
