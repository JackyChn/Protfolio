"use client";

import { socialMedia } from "@/data";
import React, { useState } from "react";
import ShimmerButton from "./ShimmerButton";
import { MessageCircle, SquareUserRound } from "lucide-react";
import Link from "next/link";
import LeaveMsgWindow from "./ui/LeaveMsgWindow";
import ReachOutWindow from "./ui/ReachOutWindow";

export default function Footer() {
  const [isLeaveMsg, setIsLeaveMsg] = useState(false);
  const [isReachOut, setIsReachOut] = useState(false);

  const handleLeaveMsg = () => {
    console.log("Leave Message button clicked");
    setIsLeaveMsg(true);
  };

  const handleReactOut = () => {
    console.log("Reach Out button clicked");
    setIsReachOut(true);
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        {/* title */}
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        {/* description */}
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today and let&apos;s discuss how I can help you achieve
          your goals.
        </p>
      </div>

      {/* two options to contact */}
      <div className="flex justify-center items-center">
        <div className="flex w-1/3 items-center justify-between text-center p-4 rounded-lg z-20">
          <div className="flex items-center">
            <ShimmerButton
              title="Reach Out"
              icon={<SquareUserRound />}
              position="right"
              handleClick={handleReactOut}
              otherClasses="z-20" // Make sure button is on top
            />
          </div>
          <span>OR</span>
          <div className="flex items-center">
            <ShimmerButton
              title="Leave Msg"
              icon={<MessageCircle />}
              position="right"
              handleClick={handleLeaveMsg}
              otherClasses="z-20" // Make sure button is on top
            />
          </div>
        </div>
      </div>

      {/* social media */}
      <div className="flex mt-8 gap-8 md:flex-row flex-col justify-center items-center">
        {socialMedia.map(({ id, img, link }) => (
          <Link key={id} href={link}>
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src={img} alt="icons" width={20} height={20} />
            </div>
          </Link>
        ))}
      </div>

      {/* ContactWindow */}
      {isLeaveMsg && <LeaveMsgWindow />}
      {isReachOut && <ReachOutWindow />}

      <div className="mt-16 md:text-base text-sm md:font-semibold lg:font-bold justify-center items-center text-center">
        Copyright © 2024 Jacky Chn
      </div>
    </footer>
  );
}
