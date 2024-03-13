import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// ASSETS IMPORTS
import bannerVideo1 from "../assets/videos/header_video_ultra_ultra_compressed.mp4";
import bannerVideo2 from "../assets/videos/mosaic_extended.mp4";
import PrimaryBtn from "../components/PrimaryBtn";

const Hero = () => {
  return (
    <div className="p-5 flex flex-col justify-between items-center text-white">
      <h1 className="font-black text-4xl lg:text-6xl m-5 ">Open Droids</h1>
      <Carousel
        className="m-5 w-11/12 md:w-3/5 rounded-xl shadow-3xl shadow-brand p-8 border-2 border-gray-dark"
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
            className="rounded-lg shadow-lg"
            muted
            autoPlay
            playsInline
            loop
            src={bannerVideo2}
          ></video>
        </figure>
      </Carousel>
      <p className="p-5 font-semibold text-sm  text-white text-center max-w-md">
        An open, modular framework for zero-shot, language conditioned
        pick-and-drop tasks in arbitrary homes.
      </p>
      <div className="my-10"><PrimaryBtn title="Learn More" handleClick="#About" /></div>
    </div>
  );
};

export default Hero;
