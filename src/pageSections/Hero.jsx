import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// ASSETS IMPORTS
import bannerImg from "../assets/images/squiggle5.png";
import bannerVideo1 from "../assets/videos/header_video_ultra_ultra_compressed.mp4";
import bannerVideo2 from "../assets/videos/mosaic_extended.mp4";


const Hero = () => {
  return (
    <div className="xl:max-w-screen-xl w-full p-5 flex flex-col md:flex-row justify-between items-center">
        <div className="m-5 relative flex justify-center items-center w-4/5 md:w-1/2">
          <img className="w-" src={bannerImg} alt="img" />
          <div className="absolute text-center">
            <h1 className="font-black text-4xl lg:text-6xl m-5">
              Open Droids
            </h1>
            <p className="font-semibold text-md lg:text-xl">
              An open, modular framework for zero-shot, language conditioned
              pick-and-drop tasks in arbitrary homes.
            </p>
          </div>
        </div>
        <Carousel
          className="m-5 w-11/12 md:w-1/2 rounded shadow-2xl"
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
      </div>
  )
}

export default Hero;