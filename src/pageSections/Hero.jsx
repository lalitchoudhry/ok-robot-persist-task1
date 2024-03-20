import React, { useRef } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORTS
import bannerVideo1 from "../assets/videos/header_video_ultra_ultra_compressed.mp4";
import bannerVideo2 from "../assets/videos/mosaic_extended.mp4";
import heroBanner from "../assets/images/robot-7-bg.png";

import PrimaryBtn from "../components/PrimaryBtn";

const Hero = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      } p-3 flex justify-evenly items-center bg-homeGradient flex-col md:flex-row h-screen`}
    >
      <div className="text-center">
        <h1 className="font-bold text-4xl lg:text-7xl m-5 text-brand underline decoration-hover">
          Open Droids
        </h1>
        <p className="p-3 text-md text-center max-w-lg font-semibold ">
          An open, modular framework for zero-shot, language conditioned
          pick-and-drop tasks in arbitrary homes.
        </p>
      </div>
      <div className="">
        <ParallaxLayer
          offset={0}
          speed={-.5}
          style={{ position: "static", width: "100%", height: "100%" }}
        >
          <img className="" src={heroBanner} alt="img" />
        </ParallaxLayer>
      </div>
    </div>
  );
};

export default Hero;
