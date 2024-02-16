import React from "react";
import Shoe from "../assets/shoe_image.svg";
import brand1 from "../assets/flipkart.svg";
import brand2 from "../assets/amazon.svg";

const Home = () => {
  return (
    <div id="home" className="h-[100vh - 80px] bg-slate-100 w-full">
      <div className="container space-y-8 md:space-y-0 md:grid md:grid-cols-2 justify-between items-center md:gap-x-5 py-10">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-5 text-center md:text-left">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="text-base font-normal text-slate-800 mb-5">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH
            OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP
            YOU WITH OUR SHOES.
          </p>

          <div className="flex justify-center md:justify-start gap-x-5">
            <button className="py-2 px-4 bg-red-600 rounded-md shadow-sm text-sm text-slate-50 font-semibold hover:shadow-lg">
              Shop Now
            </button>
            <button className="py-2 px-3 border border-slate-400 rounded-md text-slate-800 text-sm font-semibold hover:bg-red-600 hover:text-slate-50 duration-100">
              Categories
            </button>
          </div>

          <div></div>
        </div>

        <div className="flex justify-center items-center">
          <img src={Shoe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
