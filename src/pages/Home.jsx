import React from "react";

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
  return (
    <div className="xl:max-w-screen-xl w-full bg-space">
      <Hero />
      <Video />
      <About />
      <AskQBtn />
      <Analysis />
      <Paper />
      <Code />
      <Footer />
    </div>
  );
};

export default Home;
