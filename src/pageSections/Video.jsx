import React from "react";
import Dropdown from "../components/Dropdown";

const Videos = () => {
  return (
    <section id="videos" className="flex flex-col md:flex-row justify-between items-center md:p-20 p-10 ">
      <div className="p-5 m-1 sm:m-5 text-center rounded flex flex-col h-full">
        <h3 className="text-3xl font-bold text-white decoration-brand underline">
          See "<span className="text-brand">Open Droids</span>" in Action
        </h3>
        <p className="m-5 text-gray">
          In 10 home environments of New York City, OK-Robot attempted 171
          pick-and-drop tasks. Here are sample trials from 5 homes, each showing
          5 tasks.
        </p>
      </div>
      <div className="w-full lg:w-4/5 ">
        <div className="flex justify-between my-5">
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
        <figure>
          <iframe
            src="https://www.youtube.com/embed/-A2vuqFizZQ?autoplay=1&fs=0&modestbranding=1&playsinline=1&rel=0&color=white"
            showinfo="0"
            allowFullScreen=""
            className="w-full rounded-lg p-5 border-2 border-gray-dark "
            height="367px"
          ></iframe>
        </figure>
      </div>
    </section>
  );
};

export default Videos;
