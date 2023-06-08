import React from "react";
import hero1 from "../../../assets/images/hero1.png"
import {  AiFillRightCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tl from-[#002] via-[#000] to-[#150024] pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex items-center flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex max-w-xl flex-col pt-8 pb-16 lg:pt-32 lg:pb-48">
            <h1 className="text-black-800 text-slate-50 leading-normal capitalize  mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Global Assistant   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C38F8] via-[#6C38F8] to-[#BB2BFF]">
            Education
              </span> Education Consultancy Firm
            
            </h1>
            <p className="mb-10 font-semibold text-slate-400 md:mb-6 md:text-lg xl:text-xl">
            We OSICL an authorized Representative of institutes in Canada, USA, UK and Ireland and a few other countries In Europe Hungary, Czech Republic, Germany, Poland.
            </p>

            <div className="flex w-full mt-6 gap-2.5">
              <button className="inline-block text-center py-4 px-16 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center hover:from-[#1a43d6] hover:to-[#9b22d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
              Call us
              </button>
              <button className="flex gap-5 text-center py-4 px-8 text-white font-semibold items-center  border border-slate-700 focus:outline-none rounded md:mt-0">
              Read more  <AiFillRightCircle size={24} />
              </button>
             
            </div>
          </div>
          <div>
            <img src={hero1} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
