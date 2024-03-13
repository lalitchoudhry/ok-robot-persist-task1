import React from "react";

//  ASSETS IMPORTS
import paperImg from "../assets/images/paper3.png";

// COMPONENTS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";

const Paper = () => {
  return (
    <section id="paper" className="p-10 md:p-20 flex justify-between md:flex-row flex-col text-white">
      <div className="flex my-2">
        <img className="w-1/4 shadow-brand shadow-3xl" src={paperImg} alt="img" />
        <div className="mx-5">
          <h3 className="mb-5 text-2xl md:text-4xl font-bold">Paper</h3>
          <p className="text-xs md:text-md font-semibold">
            <span className="text-brand text-lg">Open Droids </span>: What Really Matters in Integrating Open-Knowledge Models for Robotics
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between item-center p-5 m-2 shadow-brand shadow-inner">
        <PrimaryBtn
          title="Read the Paper (Arxiv)"
          handleClick="https://arxiv.org/abs/2401.12202"
        />
        <PrimaryBtn
          title="Read the Paper (PDF)"
          handleClick="https://ok-robot.github.io/mfiles/paper/ok_robot.pdf"
        />
        <PrimaryBtn
          title="Citation (bibtex)"
          handleClick="https://ok-robot.github.io/more/bibtex.txt"
        />
      </div>
    </section>
  );
};

export default Paper;
