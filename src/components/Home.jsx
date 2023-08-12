import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#041C32]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ec3434]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Adam
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          {" "}
          Im a Full-Stack developer.
        </h2>
        <p className="text-[#8892b0] py-4 mx-w-[700px]">
          specializing in building (and occasinally designing) exceptional
          digital experiences. Currerntly, I'm focused on building responsive
          full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ec3434] hover:border-[#ec3434] ">
            View Works <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3"/></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
