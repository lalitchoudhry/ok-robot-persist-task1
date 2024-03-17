import React, {useRef} from "react";
import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORT
import analysisImg from "../assets/images/sankey_failure_modes.png";

const Analysis = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <section id="analysis" className={`transition-opacity ease-in-out duration-700 p-10 md:p-20 flex flex-col justify-between text-center bg-white`}>
      <div className="h-full flex flex-col justify-between">
        <h3 className="m-2 text-xl decoration-brand underline">Analysis</h3>
        <p className="mb-5 m-2 font-semibold text-3xl text-brand">
          Understanding the performance of Open Droids
        </p>
        <p className="m-2 text-sm font-medium">
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
        <p className="m-2 text-sm font-medium">
          In the "Understanding the performance of OK-Robot" section of the
          paper, we go over the analysis of the failure modes presented in the
          figure above and discuss the most frequent cases.
        </p>
      </div>
      <img ref={ref1}  className={`w-full m-2 transition-opacity ease-in-out duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`} src={analysisImg} alt="img" />
    </section>
  );
};

export default Analysis;
