import React from "react";

// ASSETS IMPORT
import analysisImg from "../assets/images/sankey_failure_modes.png";

const Analysis = () => {
  return (
    <section id="analysis" className="p-10 md:p-20 flex flex-col md:flex-row justify-between text-white md:text-left text-center">
      <div className="h-full flex flex-col justify-between">
        <h3 className="m-2 text-3xl font-bold ">Analysis</h3>
        <p className="mb-5 m-2">
          Understanding the performance of OK-Robot
        </p>
        <p className="m-2 text-sm text-gray">
          While our method can show zero-shot generalization in completely new
          environments, we probe OK-Robot to better understand when and how it
          succeeds and fails. While we find a 58.5% success rate at completely
          novel homes, at a closer look, we also notice a long tail of failure
          causes, which is presented in the figure above. We see that the
          leading three cause of failures are failing to retrieve the right
          object to navigate to from the semantic memory (9.3%), getting a
          difficult pose from the manipulation module (8.0%), and hardware
          difficulties (7.5%).
        </p>
        <p className="m-2 text-sm text-gray">
          In the "Understanding the performance of OK-Robot" section of the
          paper, we go over the analysis of the failure modes presented in the
          figure above and discuss the most frequent cases.
        </p>
      </div>
      <img className="w-full md:w-1/2  p-5 m-2" src={analysisImg} alt="img" />
    </section>
  );
};

export default Analysis;
