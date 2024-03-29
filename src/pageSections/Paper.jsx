import React, { useRef } from "react";
import { useIsVisible } from "../utils/useIsVisible";

//  ASSETS IMPORTS
import paperImg from "../assets/images/paper3.png";

// COMPONENTS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";

const Paper = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <section
      id="paper"
      className="p-10 md:p-20 flex justify-between items-center flex-col"
    >
      <h3 className="mb-5 font-semibold text-xl md:text-2xl decoration-hover underline">
        Paper
      </h3>
      <div className="flex md:flex-row flex-col justify-between items-center text-center my-2">
        <img
          ref={ref1}
          className={`w-1/3 md:w-1/4 min-w-28 bg-white p-2 rounded-lg md:shadow-lg transition-opacity ease-in-out duration-700 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
          src={paperImg}
          alt="img"
        />
        <p className="text-md m-6 sm:text-xl lg:text-3xl">
          What Really Matters in Integrating Open-Knowledge Models for Robotics
        </p>
        <div
          ref={ref2}
          className={`flex flex-col justify-between item-center p-5 m-2 child:my-2 shadow-lg rounded-lg child:text-nowrap bg-white transition-opacity ease-in-out duration-700 ${
            isVisible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <PrimaryBtn
            title="Read the Paper (Arxiv)"
            href="https://arxiv.org/abs/2401.12202"
          />
          <PrimaryBtn
            title="Read the Paper (PDF)"
            href="https://ok-robot.github.io/mfiles/paper/ok_robot.pdf"
          />
          <PrimaryBtn
            title="Citation (bibtex)"
            href="https://ok-robot.github.io/more/bibtex.txt"
          />
        </div>
      </div>
    </section>
  );
};

export default Paper;
