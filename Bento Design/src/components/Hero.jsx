import React from "react";

import HeroImg from "/heroimg.png";
import Clock from "/clock.png";
import Face from "/face.svg";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="container">
        {/* first section */}
        <div className="lg:grid grid-cols-12 py-5">
          <div className="sm:col-span-8 lg:flex justify-between items-baseline">
            <h1 className="lg:text-9xl font-medium text-5xl text-center lg:text-left ">
              superb
            </h1>

            <p className="lg:w-[30%] w-full text-center lg:text-left">
              My new design agency that is definitly not a design subscription
              agency.
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="lg:grid grid-cols-12 gap-5 m-5">
          <div className="lg:col-span-8 rounded-3xl overflow-hidden mb-5 lg:mb-0">
            <img src={HeroImg} alt="" className="w-full h-full " />
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="h-1/2 bg-box1 rounded-3xl p-5 flex flex-col justify-between gap-10 mb-5 lg:mb-0">
              <img src={Clock} alt="" className="w-[40px]" />

              <p>
                always on time. because we respect you and know that time is
                money.
              </p>
            </div>

            <div className="h-1/2 bg-box2 rounded-3xl p-5 flex flex-col justify-between gap-10 mb-5 lg:mb-0">
              <img src={Face} alt="" className="w-[40px]" />

              <p>
                You’ll leave happy. because we’re hear to make sure you win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
