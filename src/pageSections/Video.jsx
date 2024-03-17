import React, {useEffect, useRef, useState} from "react";

// HELPER 
import { useIsVisible } from "../utils/useIsVisible";

// CONSTANTS
import { FILTER_TYPE } from "../data/constants";

// COMPONENTS
import Dropdown from "../components/Dropdown";
import PrimaryBtn from "../components/PrimaryBtn";

const Videos = () => {
  // STATES AND VARIABLES
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);
  const [videoFilter, setVideoFilter] = useState({
    type: {},
    timeStamp: {}
  })

  // FUNCTION
  const shuffleVideoFilter = () => {
    console.log("shuffle filter running");
    const randomHomeNum = Math.floor(Math.random() * 5)
    const randomTimeNum = Math.floor(Math.random() * 6)
    setVideoFilter(
      {
        type: FILTER_TYPE.home.item[randomHomeNum],
        timeStamp: FILTER_TYPE.timeStamp.item[randomTimeNum]
      }
    );
    console.log(videoFilter)
  }

  const updateFilter = (value) => {
    console.log(value)
    if (value.label === "Home") {
      setVideoFilter({type: value.value, timeStamp: videoFilter.timeStamp});
    }
    else{
      setVideoFilter({type: videoFilter.type, timeStamp: value.value})
    }
  }

  // useEffect
  useEffect(()=> {
    shuffleVideoFilter();
  }, [])

  useEffect(()=> {
    console.log(videoFilter)
  }, [videoFilter])

  return (
    <section ref={ref1} id="videos" className={` flex flex-col justify-between items-center md:p-20 p-10`}>
      <div className={`sm:m-5 text-center rounded flex flex-col h-full transition-opacity ease-in-out duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <h3  className="text-3xl decoration-brand underline">
          See "<span className="text-brand">Open Droids</span>" in Action
        </h3>
        <p className="m-5 md:px-32 px-0 font-semibold">
          In 10 home environments of New York City, OK-Robot attempted 171
          pick-and-drop tasks. Here are sample trials from 5 homes, each showing
          5 tasks.
        </p>
      </div>
      <div className={`w-full lg:w-3/5 transition-opacity ease-in-out duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <div className="flex justify-between my-5 flex-col md:flex-row">
          <Dropdown {...FILTER_TYPE.home} updateFilter={updateFilter} title={videoFilter.type.label}/>
          <Dropdown {...FILTER_TYPE.timeStamp} updateFilter={updateFilter} title={videoFilter.timeStamp.label} />
          <PrimaryBtn title="Shuffle" handleClick={shuffleVideoFilter}/>
        </div>
        <figure ref={ref2} >
          <iframe
            src={`https://www.youtube.com/embed/${videoFilter.type.value}?autoplay=1&fs=0&modestbranding=1&playsinline=1&rel=0&color=white&start=${videoFilter.timeStamp.value}`}
            showinfo="0"
            allowFullScreen=""
            className="w-full rounded-lg"
            height="367px"
          ></iframe>
        </figure>
      </div>
    </section>
  );
};

export default Videos;
