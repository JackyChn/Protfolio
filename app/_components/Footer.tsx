import { socialMedia } from "@/data";
import React from "react";
import ShimmerButton from "./ShimmerButton";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import ContactWindow from "./ui/ContactWindow";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
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

      <div className="flex items-center justify-center">
        <ShimmerButton
          title="Let's get in touch!"
          icon={<MessageCircle />}
          position="right"
        />
      </div>

      {/* social media */}
      <div className="flex mt-10 gap-8 md:flex-row flex-col justify-center items-center">
        {socialMedia.map(({ id, img, link }) => (
          <Link key={id} href={link}>
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src={img} alt="icons" width={20} height={20} />
            </div>
          </Link>
        ))}
      </div>

      {/* ContactWindow */}
      <ContactWindow />

      <div className="mt-16 md:text-base text-sm md:font-semibold lg:font-bold justify-center items-center text-center">
        Copyright © 2024 Jacky Chn
      </div>
    </footer>
  );
}
