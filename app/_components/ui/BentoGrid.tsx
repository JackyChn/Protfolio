"use client";

import { cn } from "@/_lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackGround";
import { Meteors } from "./Meteors";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import LitupButton from "./LitupButton";
import toast from "react-hot-toast";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("ccc1020048076@gmail.com");
    toast.success("Email copied!😆");
    setCopied(true);
  };

  const leftLists = [
    "React18",
    "TailwindCSS",
    "Typescript",
    "NextJS",
    "Drizzle",
  ];
  const rightLists = ["PrismaORM", "Jest", "Supabase", "Git", "Agile"];

  return (
    <>
      {isClient && (
        <div
          className={cn(
            "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
            className
          )}
          style={{
            background: "rgb(2,0,36)",
            backgroundColor:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(76,76,190,1) 66%, rgba(0,212,255,1) 100%)",
          }}
        >
          <div className={`${id === 6 && "flex justify-center"} h-1/10`}>
            <div className="w-full h-full absolute">
              {img && (
                <img
                  src={img}
                  alt={img}
                  className={cn(imgClassName, "object-cover object-center ")}
                />
              )}
            </div>

            {/* id === 5 then render*/}
            <div
              className={`absolute right-0 -bottom-5 ${
                id === 5 && "w-full opacity-80"
              } `}
            >
              {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  // width={220}
                  className="object-cover object-center w-full h-full"
                />
              )}
            </div>

            {/* id === 6 then render animation bg*/}
            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 max-h-10 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
              </BackgroundGradientAnimation>
            )}
          </div>

          {/* render description & title for every card*/}
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {/* description */}
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            {/* title */}
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>
            {/* meteors for card2 */}
            {id === 2 && <Meteors />}
            {/* tech stack list div */}
            {id === 3 && (
              <div className="flex text-white-200 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                {/* left tech stack lists */}
                <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-2 lg:px-2 py-1 px-2 text-[10px] lg:text-sm opacity-50 
        lg:opacity-100 rounded-lg text-center bg-[#2e1210]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-2 lg:px-2 py-1 px-2 rounded-lg text-center bg-[#2e1210]"></span>
                </div>

                {/* right tech stack lists */}
                <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3">
                  <span className="lg:py-2 lg:px-2 py-1 px-2 rounded-lg text-center bg-[#2e1210]"></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-2 lg:px-2 py-1 px-2 text-[10px] lg:text-sm opacity-60 lg:opacity-100 rounded-lg text-center bg-[#2e1210]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Copy email */}
            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYmid slice",
                      },
                    }}
                  />
                </div>

                <LitupButton
                  handleClick={handleCopy}
                  title={copied ? "Email copied!" : "Copy my email address!"}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
