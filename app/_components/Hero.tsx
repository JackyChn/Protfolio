import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import DownloadCVBtn from "./ui/DownloadCVBtn";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      {/* 3 Spotlights combo in 3 positions */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background */}
      <div className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* Add any sentences within <p> to show upon the grid */}
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-900 py-8"></p>
      </div>

      {/* Main text */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-2-2xl lg:max-w-[60vw]">
          <h2 className="uppercase tracking-widest text-lg text-center text-blue-100 max-w-100">
            My Full Path to Full-Stack Engineer
          </h2>

          {/* Main Word */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-white-100"
            words="Transforming My Mind into Ultimate User Experience"
            duration={1.5}
          />

          {/* Name */}
          <p className="text-center md:tracking-wider text-2xl text-white-200">
            Hi, My name is <span className="text-green-400">Jacky Chn</span>,
            dreaming to become a Senior Full-Stack Engineer.
          </p>

          {/* DownloadCV */}
          <DownloadCVBtn />
        </div>
      </div>
    </div>
  );
}
