import React from "react";

// STYLE IMPORTS

// ASSETS IMPORTS

// COMPONENTS IMPORTS
import AskQBtn from "../components/AskQBtn";
import About from "../pageSections/About";
import Video from "../pageSections/Video";
import Hero from "../pageSections/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Video />
      <About />
      <AskQBtn />
    </>
  );
};

export default Home;
