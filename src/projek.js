import React from "react";
import Card from "./card";
import kao from "./image/kao.jpg";
const Projek = () => {
  return (
    <div className="py-5">
      <section id="about" className="mt-10 container mx-auto py-5">
        <h1 className="text-3xl flex justify-center text-center font-semibold mb-5">
          Recent Project
        </h1>
        <div className="">
          <header className="flex justify-between">
            <div className="flex justify-center">
              <Card
                backgroundColor={"white"}
                textColor={"gray"}
                title="McLaundry"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={kao}
                tags={[ {
                  label: "Bootstrap",
                  color: "#9BA4B1",
                  textColor: "white",
                },
                {
                  label: "Laravel",
                  color: "#9BA4B1",
                  textColor: "white",
                },]}
              />
            </div>
            <div className="flex justify-center">
              <Card
                backgroundColor={"white"}
                textColor={"gray"}
                title="Virtualib"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={kao}
                tags={[
                  {
                    label: "Bootstrap",
                    color: "#9BA4B1",
                    textColor: "white",
                  },
                  {
                    label: "Laravel",
                    color: "#9BA4B1",
                    textColor: "white",
                  },
                ]}
              />
            </div>
            <div className="flex justify-center">
              <Card
                backgroundColor={"white"}
                textColor={"gray"}
                title="Portofolio web"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                imageUrl={kao}
                tags={[
                  {
                    label: "TailwindCss",
                    color: "#9BA4B1",
                    textColor: "white",
                  },
                  {
                    label: "ReactJs",
                    color: "#9BA4B1",
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
