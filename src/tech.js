import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faPhp,
  faLaravel,
  faReact,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Tech = () => {
  return (
    <div className="py-5">
      <section id="tech" className="mt-10 container mx-auto py-5">
        <h1 className="text-3xl flex justify-center text-center font-semibold mb-5">
          Tech Stack
        </h1>
        <div className="flex justify-between py-5">
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faHtml5} className="h-10 w-10 px-5 py-4" />
          </div>
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faCss3Alt} className="h-10 w-10 px-5 py-4" tooltip="css" />
          </div>
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faJs} className="h-10 w-10 px-5 py-4" />
          </div>
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faBootstrap} className="h-10 w-10 px-5 py-4" />
          </div>
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faReact} className="h-10 w-10 px-5 py-4" />
          </div>
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faPhp} className="h-10 w-10 px-5 py-4" />
          </div>
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faLaravel} className="h-10 w-10 px-5 py-4" />
          </div>
          <div className="border-b-4 border-black">
            <FontAwesomeIcon icon={faFigma} className="h-10 w-10 px-5 py-4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
