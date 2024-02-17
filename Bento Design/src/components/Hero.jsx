import React from "react";
import HeroImg from "/heroimg.png";
import Clock from "/clock.png";
import Face from "/face.svg";

const Hero = () => {
  return (
    <div className="py-1">
      <div className="container">
        {/* first section */}
        <div className="lg:flex justify-start items-baseline gap-5">
          <h1 className="lg:text-[200px] text-9xl font-medium lg:text-left text-center">
            superb
          </h1>
          <p className="lgs:w-[20%] font-medium text-center lgs:text-left my-4 lg:my-0">
            my new design agency that is definitly not a design subscription
            agency.
          </p>
        </div>

        {/* second section */}

        <div className="lg:flex justify-between items-center gap-5">
          <div>
            <img src={HeroImg} alt="" className="rounded-3xl w-auto" />
          </div>

          <div className="w-full lg:w-[25%] flex flex-col justify-between gap-y-5 my-4 lg:my-0">
            <div className="h-1/2 bg-[#F7A072] p-5 flex flex-col items-start justify-between gap-10 rounded-3xl">
              <img src={Clock} alt="" />

              <p className="w-[60%]">
                always on time. because we respect you and know that time is
                money.
              </p>
            </div>

            <div className="h-1/2 bg-[#B5E2FA] p-5 flex flex-col items-start justify-between gap-10 rounded-3xl">
              <img src={Face} alt="" />

              <p className="w-[60%]">
                always on time. because we respect you and know that time is
                money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
