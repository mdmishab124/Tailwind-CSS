import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#041C32] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ec3434]">
              About
            </p>
            <div className="h-[25px]"></div>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hey, I'm Clint. nice to meet you. Take a look around and enjoy!
            </p>
          </div>
          <div>
            <p>
              Devoted to crafting exceptional software solutions that positively
              impact lives within my sphere, my passion fuels my journey. My
              expertise lies in tailoring software for a diverse clientele: from
              individuals andsmall enterprises to sprawling corporate giants.
              Imagine having a software virtuoso constantly at your beck and
              call, ready to transform your digital aspirations into reality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
