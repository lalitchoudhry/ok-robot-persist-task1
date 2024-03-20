import React, { useEffect, useRef, useState } from "react";

// STYLE IMPORTS
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// ASSETS IMPORTS

// COMPONENTS IMPORTS
import AskQBtn from "../components/AskQBtn";
import About from "../pageSections/About";
import Video from "../pageSections/Video";
import Hero from "../pageSections/Hero";
import Analysis from "../pageSections/Analysis";
import Paper from "../pageSections/Paper";
import Code from "../pageSections/Code";
import Footer from "../components/Footer";

const Home = () => {
  const parallax = useRef(null);

  // FUNCTIONS
  const getWidth = () => window.innerWidth;

  const [width, setWidth] = useState(getWidth);

  // useEffects
  useEffect(() => {
    window.addEventListener('resize', getWidth)

    return () => window.removeEventListener('resize', getWidth)
  }, [])

  return (
    <div className="xl:max-w-screen-xl w-full bg-space">
      <AskQBtn />
      <Parallax ref={parallax} style={{maxWidth: "1540px"}}>
        <Hero />
        <Video />
        <About />
        <Analysis />
        <Paper />
        <Code />
        <Footer />
      </Parallax>
    </div>
  );
};

export default Home;
