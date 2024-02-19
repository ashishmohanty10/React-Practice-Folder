import React from "react";
import HeroImg from "/heroimg.svg";
import Clock from "/clock.svg";
import Face from "/face.svg";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="container">
        {/* first section */}
        <div className="lg:grid grid-cols-12">
          <div className="lg:col-span-8 lg:flex justify-between items-baseline">
            <h1 className="md:text-9xl text-slate-900 font-medium text-6xl text-center lg:text-left mb-4 lg:mb-0">
              superb
            </h1>
            <p className="lg:w-[25%] w-full text-center lg:text-left">
              My new design agency that is definitly not a design subscription
              agency.
            </p>
          </div>
        </div>

        {/* second section */}
        <div className="lg:grid grid-cols-12 py-2 gap-5">
          <div className="lg:col-span-8 rounded-3xl overflow-hidden mb-6 lg:mb-0">
            <img src={HeroImg} alt="" className="w-full h-full" />
          </div>

          <div className="lg:col-span-4 flex flex-col gap-5 ">
            <div className="h-1/2 bg-box1 p-5 rounded-3xl flex flex-col justify-between">
              <img src={Clock} alt="" className="w-[40px]" />

              <p>
                always on time. because we respect you and know that time is
                money.
              </p>
            </div>

            <div className="h-1/2 bg-box2 p-5 rounded-3xl flex flex-col justify-between">
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
