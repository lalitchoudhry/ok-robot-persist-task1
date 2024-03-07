
import React, { useState } from "react";

// ASSETS IMPORTS
import robotIcon from "../assets/icons/robot1.png";

const About = () => {
    // STATES AND VARIABLE
    const [isMobileScreen, setIsMobileScreen] = useState(false);

  return (
    <section id="about" className="xl:max-w-screen-xl w-full p-10 bg-main flex">
      <div className="">
        <h3 className="text-3xl font-bold text-white">About Open Droids</h3>
        <p className={!isMobileScreen ? "w-4/5 leading-6 font-semibold text-sm py-6 text-white line-clamp-5 sm:line-clamp-none" : "leading-6 font-semibold text-sm py-6 text-white line-clamp-none"}>
          Remarkable progress has been made in recent years in the fields of
          vision, language, and robotics. We now have vision models capable of
          recognizing objects based on language queries, navigation systems that
          can effectively control mobile systems, and grasping models that can
          handle a wide range of objects. Despite these advancements,
          general-purpose applications of robotics still lag behind, even though
          they rely on these fundamental capabilities of recognition,
          navigation, and grasping. In this paper, we adopt a systems-first
          approach to develop a new Open Knowledge-based robotics framework
          called OK-Robot. By combining Vision-Language Models (VLMs) for object
          detection, navigation primitives for movement, and grasping primitives
          for object manipulation, OK-Robot offers a integrated solution for
          pick-and-drop operations without requiring any training. To evaluate
          its performance, we run OK-Robot in 10 real-world home environments.
          The results demonstrate that OK-Robot achieves a 58.5% success rate in
          open-ended pick-and-drop tasks, representing a new state-of-the-art in
          Open Vocabulary Mobile Manipulation (OVMM) with nearly 1.8x the
          performance of prior work. On cleaner, uncluttered environments,
          OK-Robot's performance increases to 82%. However, the most important
          insight gained from OK-Robot is the critical role of nuanced details
          when combining Open Knowledge systems like VLMs with robotic modules. 
          <span className="block sm:hidden underline cursor-pointer mt-2" onClick={()=>setIsMobileScreen(!isMobileScreen)}>{!isMobileScreen ? "see more..." : "see less..."}</span>
        </p>
      </div>
      <img className="w-1/4 hidden sm:block" src={robotIcon} alt="img" />
    </section>
  );
};

export default About;
