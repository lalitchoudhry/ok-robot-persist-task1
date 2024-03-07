import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// STYLE IMPORTS
import bannerImg from "../assets/images/squiggle.png";

// ASSETS IMPORTS
import bannerVideo1 from "../assets/videos/header_video_ultra_ultra_compressed.mp4";
import bannerVideo2 from "../assets/videos/mosaic_extended.mp4";

// COMPONENTS IMPORTS
import AskQBtn from "../components/AskQBtn";
import AboutsSection from "../components/AboutsSection";
import VideosSection from "../components/VideosSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-homeGradient">
        <div className="relative flex justify-center items-center w-4/5 sm:w-1/2">
          <img className="w-50" src={bannerImg} alt="img" />
          <div className="absolute text-center">
            <h1 className="font-black text-4xl lg:text-6xl m-5 text-white">OK-Robot</h1>
            <p className="font-semibold text-md lg:text-xl text-white">
              An open, modular framework for zero-shot, language conditioned
              pick-and-drop tasks in arbitrary homes.
            </p>
          </div>
        </div>
          <Carousel className="w-4/5 sm:w-1/2 rounded shadow-2xl" showThumbs={false}>
            <figure>
              <video className="rounded-lg shadow-xl"
                muted
                autoPlay
                playsInline
                loop
                controls
                src={bannerVideo1}
              ></video>
            </figure>
            <figure>
              <video className="rounded-lg shadow-lg"
                muted
                autoPlay
                playsInline
                loop
                controls
                src={bannerVideo2}
              ></video>
            </figure>
          </Carousel>
      </div>
      <AboutsSection />
      <VideosSection />
      <AskQBtn />
    </>
  );
};

export default Home;
