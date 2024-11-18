"use client";

import React from "react";
import ShimmerButton from "../ShimmerButton";
import { Navigation } from "lucide-react";

export default function DownloadCVBtn() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Jacky-Resume.pdf";
    link.download = "Jacky-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center mt-8">
      <ShimmerButton
        handleClick={handleDownloadCV}
        title={"Download My Resume"}
        icon={<Navigation className="" />}
        position={"right"}
        otherClasses={""}
      />
    </div>
  );
}
