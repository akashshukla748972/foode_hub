import React, { useState } from "react";
import Bannervideo from "../assets/Bannervideo.mp4";
import Bannerfood from "../assets/Bannerfood.png";
import Bannerarrow from "../assets/BannerArrow.png";
import Bannerclock from "../assets/BannerClock.png";
import Bannersmall1 from "../assets/Bannersmall1.png";
import Bannersmall2 from "../assets/Bannersmall2.png";
import Bannersmall3 from "../assets/Bannersmall3.png";
import FireIcon from "../assets/FireIcon.png";
import "../components/global.css";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="bg-white pt-12 md:pt-24 min-h-[500px] flex items-center">
      {/* video model */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-8 right-0 text-2xl text-white cursor-pointer"
            >
              &times;
            </button>
            <div className="aspect-video">
              <iframe
                src={Bannervideo}
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="container w-[95%] mx-auto px-6 md:px-12 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* left content */}
        <div className="w-full lg:flex-1 text-center lg:text-left ">
          <h3 className="text-lg mt-5 md:text-xl lg:text-2xl font-black font-comfortaa text-gray-600 mb:2 md:mb-3">
            Mame Dion Fuster
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-6xl font-pacifico animate-slide-up font-extrabold leading-tight mb-4">
            Claim Best Offer on <br />
            <span className="text-orange-600">Fast Food</span>
            <br className="hidden md:block" />{" "}
            <span className="text-yellow-500">Restaurants</span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6">
            Our hob is fill your tummy with delicious food{" "}
            <br className="hidden sm:block" /> and with fast and free{" "}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-red-500 text-white px-6 py-2 md:px-8 md:py-2 rounded-full hover:bg-red-600 transition hover:scale-105 text-sm md:text-base">
              Get Started
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 md:gap-3 group"
            >
              <span className="w-10 h-10 md:h-12 md:w-12 bg-red-500 rounded-full flex items-center justify-center transition group-hover:bg-red-600 group-hover:scale-100 shadow-lg relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-red-400"></span>
                <span className="text-white text-lg">&#9654;</span>
              </span>
              <span className="text-gray-600 group-hover:text-red-500 font-semibold text-sm md:text-base">
                Watch Video
              </span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-6">
            <div className="flex -space-x-3">
              <img
                src={Bannersmall1}
                alt="customer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full broder-2 border-white shadow-md"
              />
              <img
                src={Bannersmall2}
                alt="customer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full broder-2 border-white shadow-md"
              />
              <img
                src={Bannersmall3}
                alt="customer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full broder-2 border-white shadow-md"
              />
            </div>
            <div className="">
              <p className="text-lg md:text-xl font-bold flex items-center">
                <span className="text-yellow-500 mr-2">
                  &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                </span>
                11.8k
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Our Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-full lg:flex-1 relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
          <div className="relative mx-auto">
            <img
              src={Bannerfood}
              alt="Banner food"
              className="w-full h-auto object-cover transform -rotate-20 hover:rotate-0 transition duration-500 rounded-full"
            />
            <div className="absolute left-2 sm:left-4 md:left-6 top-4 sm:top-6 w-14 sm:w-14 md:w-20">
              <img
                src={Bannerclock}
                alt="Clock"
                className="w-full h-auto -rotate-3 hover:rotate=0"
              />
            </div>

            <div className="absolute right-2 sm:-right-6 md:-right-12 top-1/2 transform -translate-y-1/2">
              <div className="ralative">
                <img
                  src={FireIcon}
                  alt="Fire"
                  className="w-10 sm:w-12 md:w-14 mb-20sm:mb-32 md:mb-40"
                />
                <img
                  src={Bannerarrow}
                  alt="Arrow"
                  className="w-12 sm:w-16 md:w-20 transform rotate-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
