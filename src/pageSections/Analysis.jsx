import React, { useRef } from "react";
import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORT
import analysisImg from "/assets/images/sankey_failure_modes.png";

const Analysis = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      id="analysis"
      className={`transition-opacity ease-in-out duration-700 p-5 md:p-20 flex flex-col justify-between text-center bg-brand`}
    >
      <div className="h-full md:mx-10 mx-0 flex flex-col justify-between">
        <h3 className="m-2 text-xl">Analysis</h3>
        <p className="md:mb-5 m-2 font-semibold md:text-2xl lg:text-4xl text-lg text-white">
          Understanding the performance of Open Droids
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse md:my-10">
        <div className="md:mx-5 mx-0 flex flex-col justify-between text-white">
          <p className="m-2 text-base md:text-md text-justify md:leading-8">
            While our method can show zero-shot generalization in completely new
            environments, we probe Open Droids to better understand when and how it
            succeeds and fails. While we find a 58.5% success rate at completely
            novel homes, at a closer look, we also notice a long tail of failure
            causes, which is presented in the figure above. We see that the
            leading three cause of failures are failing to retrieve the right
            object to navigate to from the semantic memory (9.3%), getting a
            difficult pose from the manipulation module (8.0%), and hardware
            difficulties (7.5%).
          </p>
          <p className="m-2 text-base md:text-md text-justify md:leading-8">
            In the "Understanding the performance of Open Droids" section of the
            paper, we go over the analysis of the failure modes presented in the
            figure above and discuss the most frequent cases.
          </p>
        </div>
        <img
          ref={ref1}
          className={`lg:w-1/2 rounded-lg shadow-xl m-2 md:mx-5 mx-0 transition-opacity ease-in-out duration-700 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
          src={analysisImg}
          alt="img"
        />
      </div>
    </section>
  );
};

export default Analysis;
