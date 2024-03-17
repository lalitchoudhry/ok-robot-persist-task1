import React, { useRef } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORTS
import bannerVideo1 from "../assets/videos/header_video_ultra_ultra_compressed.mp4";
import bannerVideo2 from "../assets/videos/mosaic_extended.mp4";
import PrimaryBtn from "../components/PrimaryBtn";

const Hero = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      } p-3 flex flex-col justify-between items-center bg-homeGradient`}
    >
      <h1 className="font-bold text-4xl lg:text-6xl m-5 text-brand">
        Open Droids
      </h1>
      <p className="p-3 text-sm text-center max-w-lg">
        An open, modular framework for zero-shot, language conditioned
        pick-and-drop tasks in arbitrary homes.
      </p>
      <Carousel
        className={`transition-opacity ease-in duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        } m-5 w-11/12 md:w-3/5 rounded-xl shadow-3xl shadow-brand`}
        showThumbs={false}
        interval={5000}
        emulateTouch
        autoPlay
        infiniteLoop
      >
        <figure>
          <video
            className="rounded-lg shadow-xl"
            muted
            autoPlay
            playsInline
            loop
            src={bannerVideo1}
          ></video>
        </figure>
        <figure>
          <video
            ref={ref1}
            className="rounded-lg shadow-lg"
            muted
            autoPlay
            playsInline
            loop
            src={bannerVideo2}
          ></video>
        </figure>
      </Carousel>
      
      <div className="my-5">
        <PrimaryBtn title="Learn More" href="#About" />
      </div>
    </div>
  );
};

export default Hero;
