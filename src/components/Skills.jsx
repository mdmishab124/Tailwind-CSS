import React from "react";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JAVASCRIPT from "../assets/JAVASCRIPT.png";
import GITHUB from "../assets/GITHUB.png";
import REACT from "../assets/REACT.png";
import NODE from "../assets/NODE.png";
import C from "../assets/C.png";
import JAVA from "../assets/JAVA.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#041C32] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-[#ec3434]">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={HTML} alt="HTML Logo" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={CSS} alt="HTML Logo" />
            <p className="my-4">CSS</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={JAVASCRIPT} alt="HTML Logo" />
            <p className="my-4">JAVASCRIPT</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={GITHUB} alt="HTML Logo" />
            <p className="my-4">GITHUB</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={REACT} alt="HTML Logo" />
            <p className="my-4">REACT</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={NODE} alt="HTML Logo" />
            <p className="my-4">NODE</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={C} alt="C Logo" />
            <p className="my-4">C</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-16 mx-auto" src={JAVA} alt="JAVA Logo" />
            <p className="my-4">JAVA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
