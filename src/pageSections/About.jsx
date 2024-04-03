
import React, { useState, useRef } from "react";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import { useIsVisible } from "../utils/useIsVisible";

// ASSETS IMPORTS

const About = () => {
    // STATES AND VARIABLE
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const ref1 = useRef(null);
    const isVisible1 = useIsVisible(ref1);

  return (
    <section id="about" className={`transition-opacity ease-in-out duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} p-5 md:p-20 mt-20 flex flex-col text-center `}>
      <div className=" md:mx-5 mx-0 mb-10 md:mb-0">
        <h3 className="text-left text-2xl lg:text-4xl underline decoration-brand">About <span className="text-brand ">Open Droids</span></h3>
        <p ref={ref1} className={!isMobileScreen ? "leading-8 text-base lg:text-lg py-6  line-clamp-5 md:line-clamp-none  text-justify" : "leading-8 text-base lg:text-lg py-6  line-clamp-none text-justify"}>
          Remarkable progress has been made in recent years in the fields of
          vision, language, and robotics. We now have vision models capable of
          recognizing objects based on language queries, navigation systems that
          can effectively control mobile systems, and grasping models that can
          handle a wide range of objects. Despite these advancements,
          general-purpose applications of robotics still lag behind, even though
          they rely on these fundamental capabilities of recognition,
          navigation, and grasping. In this paper, we adopt a systems-first
          approach to develop a new Open Knowledge-based robotics framework
          called Open Droids. By combining Vision-Language Models (VLMs) for object
          detection, navigation primitives for movement, and grasping primitives
          for object manipulation, Open Droids offers a integrated solution for
          pick-and-drop operations without requiring any training. To evaluate
          its performance, we run Open Droids in 10 real-world home environments.
          The results demonstrate that Open Droids achieves a 58.5% success rate in
          open-ended pick-and-drop tasks, representing a new state-of-the-art in
          Open Vocabulary Mobile Manipulation (OVMM) with nearly 1.8x the
          performance of prior work. On cleaner, uncluttered environments,
          Open Droids's performance increases to 82%. However, the most important
          insight gained from Open Droids is the critical role of nuanced details
          when combining Open Knowledge systems like VLMs with robotic modules. 
        </p>
        <div className="text-start text-sm block md:hidden underline cursor-pointer mt-2" onClick={()=>setIsMobileScreen(!isMobileScreen)}>{!isMobileScreen ? "see more..." : "see less..."}</div>
      </div>
    </section>
  );
};

export default About;
