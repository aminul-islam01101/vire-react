/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Banner.css';

const Banner = () => (
  <div className="BannerBg text-white flex justify-center items-center" id="banner">
    <div className="overlay my-layout">
      <div className="flex justify-center items-center w-full h-full flex-col">
        <div className="text-5xl lg:text-7xl extra-large:text-[110px] 5xl:text-[90px] article-heading relative group text-center">
          <h2 className="transition-all duration-500 ease-in-out mt-16 lg:mt-14 xl:mt-14 5xl:mt-0">
            <p className="text-white font-medium">Sales &</p>
          </h2>
          <h2 className="transition-all duration-500 ease-in-out -translate-y-2">
            <p className="text-base-100 font-medium">Marketing</p>
          </h2>
        </div>
        <p className="text-base xl:text-xl text-center mt-4 md:w-[65%]">
          At Business Savvy UK, we understand that achieving sales and marketing goals is essential
          for businesses to succeed. Our Sales & Marketing service provides businesses with the
          support they need to reach their target audience effectively and increase their revenue.
        </p>

        {/* Learn more button  */}
        <div className="h-[10%] lg:[8%] bg-white w-full lg:w-[70%] rounded-md mt-10 justify-end items-center flex py-2">
          <div className="mr-[5%]">
            <button
              type="button"
              className="border border-black/20 rounded-md text-black px-4 py-3 xl:px-8 xl:py-4 hover:bg-neutral hover:text-white transition-all ease-in-out duration-150"
            >
              Contact us
            </button>
          </div>
        </div>
        <div className="flex justify-around items-center gap-x-5 mt-2 lg:mt-3">
          <span className="text-sm md:text-md xl:text-base 5xl:text-xl">
            Already have an account?
          </span>
          <button
            type="button"
            className="text-md md:text-base xl:text-xl font-bold 5xl:text-2xl border-b-4 border-transparent hover:border-b-4 transition-all ease-out duration-200 hover:border-neutral"
          >
            Login Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
