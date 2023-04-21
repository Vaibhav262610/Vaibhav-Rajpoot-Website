import React from "react";
import Link from "next/link";
// import Contact from "../pages/contact";
const Header = () => {
  const greaterThan = "<";
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="main h-screen  flex flex-col w-4/6 justify-center">
          <h2 className="wave text-5xl sm:text-4xl  text-green-400 pt-12">👋 Hi, I am</h2>
          <h1 className="main-heading pt-2 text-9xl font-bold">Vaibhav Rajpoot</h1>
          <h1 className="head-text pt-14 text-7xl text-gray-400 font-semibold">
            I speak in{" "}
            <span className=" text-yellow-400">{greaterThan}code /&gt; </span>{" "}
            so you don't have to
          </h1>
          <p className="main-para  sm:w-8/12 pt-10 text-4xl text-slate-500">
            I'm your friendly neighborhood <span className="text-slate-400 font-bold">Front-End Developer</span>.Helping people turn their ideas into sites & apps that work.
          </p>
          <div className="buttons flex pt-10 gap-5">
            
            <a href="https://github.com/Vaibhav262610" target="_blank">
              <button className="github-btn hover:text-white flex gap-2">
                  <svg
                    className="mr-2"
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="github"
                    width="1.2em"
                    height="1.2em"
                    fill="#1890ff"
                    aria-hidden="true"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                Github
              </button>
            </a>
            <Link href="/contact">
              <button className="check-btn hover:text-white">
                Check Out My Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
