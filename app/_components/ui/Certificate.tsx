import React from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Link from "next/link";

export default function Certificate() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold text-white ">
          {"Title here"}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-white"
        >
          {"description"}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div></div>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            {"copy"}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
          >
            Check →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
