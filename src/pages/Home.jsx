import React, { useEffect, useState } from "react";

// STYLE IMPORTS

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

  // FUNCTIONS

  // useEffects

  return (
    <div className="xl:max-w-screen-xl w-full">
      <AskQBtn />
        <Hero />
        <Video />
        <About />
        <Analysis />
        <Paper />
        <Code />
        <Footer />
    </div>
  );
};

export default Home;
