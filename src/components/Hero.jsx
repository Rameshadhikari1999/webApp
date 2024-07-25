import React from "react";
import HeroImg from "../assets/images/hero.png";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <div id="home" className="w-full lg:h-fit pb-12 bg-gradient-to-r from-gray-500 via-gray-700 to-blue-200  relative">
      <h1 className="text-4xl lg:w-1/2 lg:mx-auto lg:py-5 font-mono font-bold capitalize text-white md:w-3/4 p-3">
        Music is the shothand of emotion
      </h1>
      <div className="md:w-3/4 lg:translate-x-2/3">
        <img src={HeroImg} className="lg:w-[44.4%] " alt="Hero" />
      </div>
      <div className="p-3 w-full mx-auto md:w-3/4 md:mx-auto absolute bottom-0">
        <Buttons title="Get Started" />
        <Buttons title="Learn More" />
    </div>
    </div>
  );
};

export default Hero;
