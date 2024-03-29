import React, { useState, useRef, useEffect } from "react";

import useMeasure from 'react-use-measure'
import { useSpring, animated } from '@react-spring/web'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORTS
import heroBanner from "../assets/images/robot-7-bg.png";

import PrimaryBtn from "../components/PrimaryBtn";

const Hero = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const [open, toggle] = useState(false)
  const [ref, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0 })

  useEffect(() => {
    setTimeout(() => {
      toggle(!open)
    }, 500);
  }, [])

  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      } p-10 md:p-20 flex justify-between items-center flex-col md:flex-row bg-white`}
    >
      <div className="text-center md:text-start flex flex-col items-center md:items-start">
          <h1 ref={ref} className="md:w-3/5 lg:w-2/3 font-bold text-4xl lg:text-7xl m-5 text-brand">
            <span>
              Open Droids
            </span>
            <animated.p  className="bg-hover p-1" style={props} ></animated.p>
          </h1>
          <p className="m-5 lg:text-2xl text-sm max-w-3xl">
            An open, modular framework for zero-shot, language conditioned
            pick-and-drop tasks in arbitrary homes.
          </p>
          <div className="m-5"><PrimaryBtn title="Learn more" /></div>
      </div>
      <img className="" src={heroBanner} alt="img" />
      {/* <div className=""> */}
      {/* <ParallaxLayer
          offset={0}
          speed={-.5}
          style={{ position: "static", width: "100%", height: "100%" }}
        >
        </ParallaxLayer>
      </div> */}
    </div>
  );
};

export default Hero;
