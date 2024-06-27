import React from "react";
import Card from "./card";
import Tdgc from "./image/TDGC.png";
import Smkn from "./image/Smkn.png";
import Port from "./image/portofolio.png";
const Projek = () => {
  return (
    <div className="py-5">
      <section id="project" className="mt-10 container mx-auto py-5">
        <h1 className="text-3xl flex justify-center text-center font-semibold mb-5">
          Recent Project
        </h1>
        <div className="">
          <header className="flex justify-between">
            <div className="flex justify-center">
              <Card
                backgroundColor={"white"}
                textColor={"gray"}
                title="TD Gaming center"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={Tdgc}
                tags={[
                  {
                    label: "TailwindCSS",
                    color: "#38BDF8",
                    textColor: "white",
                  },
                  {
                    label: "ReactJS",
                    color: "#55BCD3",
                    textColor: "white",
                  },
                  {
                    label: "Laravel",
                    color: "#FF2D20",
                    textColor: "white",
                  },
                ]}
              />
            </div>
            <div className="flex justify-center">
              <a
                href="https://smkn4-tng.sch.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  backgroundColor={"white"}
                  textColor={"gray"}
                  title="SMKN 4 Tangerang"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                  imageUrl={Smkn}
                  tags={[
                    {
                      label: "TailwindCSS",
                      color: "#38BDF8",
                      textColor: "white",
                    },
                    {
                      label: "ReactJS",
                      color: "#55BCD3",
                      textColor: "white",
                    },
                    {
                      label: "Laravel",
                      color: "#FF2D20",
                      textColor: "white",
                    },
                  ]}
                />
              </a>
            </div>
            <div className="flex justify-center">
              <Card
                backgroundColor={"white"}
                textColor={"gray"}
                title="Portofolio Web"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={Port}
                tags={[
                  {
                    label: "TailwindCss",
                    color: "#38BDF8",
                    textColor: "white",
                  },
                  {
                    label: "ReactJs",
                    color: "#55BCD3",
                    textColor: "white",
                  },
                ]}
              />
            </div>
          </header>
        </div>
      </section>
    </div>
  );
};
export default Projek;
