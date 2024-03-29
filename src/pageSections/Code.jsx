import React from "react";

const Code = () => {
  return (
    <section id="code" className="p-10 md:p-20 flex md:flex-row flex-col justify-between md:items-center">
      <div>
        <h2 className="font-bold text-4xl text-brand  cursor-pointer underline decoration-brand decoration-4">
          Open Droids
        </h2>
        <p>Get the code on github.</p>
        <ul className="my-5 flex flex-col text-sm child:my-2">
          <li>
            <i className="bi bi-github"></i>
            <a
              className="m-2 hover:underline"
              href="https://github.com/ok-robot/ok-robot"
            >
              GitHub Repo
            </a>
          </li>
          <li>
            <i className="bi bi-file-earmark-code"></i>
            <a
              className="m-2 hover:underline"
              href="https://github.com/ok-robot/ok-robot/tree/main/docs"
            >
              Documentation
            </a>
          </li>
          <li>
            <i className="bi bi-discord"></i>
            <a
              className="m-2 hover:underline"
              href="https://discord.gg/wzzZJxqKYC"
            >
              Question? Ask on Discord
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl  cursor-pointer ">Connect with us</h2>
        <ul className="my-5 flex flex-col text-sm child:my-2">
          <li>
            <i className="bi bi-twitter-x"></i>
            <a className="m-2 hover:underline" href="#">Twitter</a>
          </li>
          <li>
            <i className="bi bi-linkedin"></i>
            <a className="m-2 hover:underline" href="#">LilnkedIn</a>
          </li>
          <li>
            <i className="bi bi-discord"></i>
            <a className="m-2 hover:underline" href="#">Discord</a>
          </li>
          <li>
            <i className="bi bi-instagram"></i>
            <a className="m-2 hover:underline" href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Code;
