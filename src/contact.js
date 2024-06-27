import React from "react";

const Contact = () => {
  return (
    <div className="bg-black py-14 text-white">
      <section id="contact" className="flex items-center py-5 px-5 mx-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex flex-col items-start md:items-start text-left ">
            <h1 className="text-5xl font-bold mb-3">Contact Me</h1>
            <div className="border-b-4 border-white w-full mb-5"></div>
            <p className="text-xl">
              Feel free to reach out to me. <br /> I look forward to connecting
              with you!
            </p>
          </div>
          <div className="h-60 border-l-4 border-gray-300 mx-5"></div>
          <div className="flex flex-col items-start">
            <div className="flex justify-between">
              <div className="mx-3">
                <h1 className="text-2xl font-semibold mb-2">Email</h1>
                <div className="border-b-4 border-white w-72 mb-3"></div>
                <p className="text-lg">azisalfalahyasser@gmail.com</p>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold mb-2">Phone Number</h1>
                <div className="border-b-4 border-white w-72 mb-3"></div>
                <p className="text-lg">085777485983</p>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="mx-3">
                <h1 className="text-2xl font-semibold mb-2">Github</h1>
                <div className="border-b-4 border-white w-72 mb-3"></div>
                <a
                  href="https://github.com/Yasser021"
                  className="text-lg"
                >
                  Yasser021
                </a>
              </div>
              <div className="">
                <h1 className="text-2xl font-semibold mb-2">Linkedin</h1>
                <div className="border-b-4 border-white w-72 mb-3"></div>
                <a
                  href="https://www.linkedin.com/in/yasser-aziz-alfalah/"
                  className="text-lg"
                >
                  Yasser Aziz Alfalah
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
