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

  return (
    <section
      id="paper"
      className={`transition-opacity ease-in-out duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      } p-10 md:p-20 flex justify-between flex-col `}
    >
      <div className="flex flex-col items-center my-2">
        <h3 className="mb-5 text-xl md:text-2xl decoration-brand underline">
          Paper
        </h3>
        <div className="flex text-center items-center">
          <img
            ref={ref1}
            className="w-1/4 min-w-28 "
            src={paperImg}
            alt="img"
          />
          <p className="text-md font-semibold">
            <span className="text-brand text-2xl">Open Droids </span>: What
            Really Matters in Integrating Open-Knowledge Models for Robotics
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between item-center p-5 m-2 child:my-2">
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
    </section>
  );
};

export default Paper;
