import React from "react";

const Videos = () => {
  return (
    <section id="videos" className="flex flex-col-reverse sm:flex-row justify-between items-center p-5 bg-[#EFECEC]">
      <div className="w-full">
        <div>here filter</div>
        <figure className="">
          <iframe
            src="https://www.youtube.com/embed/-A2vuqFizZQ?autoplay=1&fs=0&modestbranding=1&playsinline=1&rel=0&color=white"
            showinfo="0"
            allowFullScreen=""
            className="w-full rounded-lg shadow-lg"
            height="367"
          ></iframe>
        </figure>
      </div>
      <div className="p-5 m-1 sm:m-5 text-center rounded flex flex-col h-full">
        <h3 className="text-3xl font-bold ">See "OK-Robot" in Action</h3>
        <p className="my-5 ">
          In 10 home environments of New York City, OK-Robot attempted 171
          pick-and-drop tasks. Here are sample trials from 5 homes, each showing
          5 tasks.
        </p>
      </div>
    </section>
  );
};

export default Videos;
