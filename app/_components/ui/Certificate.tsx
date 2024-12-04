"use client";

import React, { Suspense } from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Link from "next/link";
import Image from "next/image";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";

interface CertificatesProps {
  [key: string]: string;
}

export default function Certificate({
  title,
  description,
  image,
  hasValidationNumber,
  validationNumber,
  link,
}: CertificatesProps) {
  const displayValidationNumber =
    validationNumber.length > 10
      ? validationNumber.slice(0, 10) + "..."
      : validationNumber;

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(validationNumber);
      toast.success("Validation Number copied!😆");
    } else {
      toast.error("Failed to copy the validationNumber...😪");
    }
  };
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold text-white ">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-white"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="500"
            width="500"
            className="w-full rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            className="flex items-center justify-center px-4 py-2 rounded-xl text-sm font-normal text-white"
          >
            <span className="flex justify-center items-center">
              Validation Number: {""}
              <span className="text-purple ml-2">
                {displayValidationNumber}
              </span>
            </span>

            {hasValidationNumber === "1" && (
              <button
                className="flex items-center justify-center ml-2"
                onClick={handleCopy}
              >
                <Copy size={20} />
              </button>
            )}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black text-white text-md font-bold"
          >
            <Suspense fallback={<SpinnerMini />}>
              <Link href={link}>Go Check → </Link>
            </Suspense>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
