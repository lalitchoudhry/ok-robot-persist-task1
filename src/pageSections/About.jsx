
import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// ASSETS IMPORTS
import robotIcon from "../assets/icons/robot1.png";
import bannerVideo1 from "../assets/videos/header_video_ultra_ultra_compressed.mp4";
import bannerVideo2 from "../assets/videos/mosaic_extended.mp4";

const About = () => {
    // STATES AND VARIABLE
    const [isMobileScreen, setIsMobileScreen] = useState(false);

  return (
    <section id="about" className="p-10 md:p-20 flex flex-col md:flex-row-reverse md:text-start text-center">
      <div className="text-white mx-10 mb-10 md:mb-0">
        <h3 className="text-3xl font-bold decoration-brand underline ">About Open Droids</h3>
        <p className={!isMobileScreen ? "leading-5 text-sm py-6  line-clamp-5 md:line-clamp-none text-gray" : "leading-5 text-sm py-6  line-clamp-none text-gray"}>
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
          <span className="block md:hidden underline cursor-pointer mt-2" onClick={()=>setIsMobileScreen(!isMobileScreen)}>{!isMobileScreen ? "see more..." : "see less..."}</span>
        </p>
      </div>
      <Carousel
        className=" rounded-xl p-8 border-2 border-gray-dark"
        showThumbs={false}
        interval={5000}
        emulateTouch
        autoPlay
        infiniteLoop
      >
        <figure>
          <video
            className="rounded-lg w-full"
            muted
            autoPlay
            playsInline
            loop
            src={bannerVideo1}
          ></video>
        </figure>
        <figure>
          <video
            className="rounded-lg w-full"
            muted
            autoPlay
            playsInline
            loop
            src={bannerVideo2}
          ></video>
        </figure>
      </Carousel>
    </section>
  );
};

export default About;
