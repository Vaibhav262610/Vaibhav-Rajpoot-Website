import Link from "next/link";
import React from "react";

const About = () => {
  const ex = "rem";
  return (
    <>
      <div className="h-screen justify-center flex flex-col items-center gap-40">
        <div className="about-section">
          <div className="about-main-heading">
            <h1 className="about-heading">&lt;About /&gt;</h1>
            <h1 className=" name-heading font-black" style={{ width: 820 }}>
              Vaibhav Rajpoot
            </h1>
          </div>
        </div>

        <div className="whyme relative right-80  ">
          <p className="pb-8 text-4xl text-green-400 font-semibold">About Me</p>
          <p className="text-4xl text-gray-400">
            I am a Front-end creative developer based in Barielly, India. bhlahh blahh blahhhh
          </p>
          <p className="text-3xl pt-3 pb-10 text-green-400 font-bold">
            Want to know more?
          </p>
          <div className="flex gap-5">
            <Link href="/Progress">
              <button className="check-btn hover:text-white">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
