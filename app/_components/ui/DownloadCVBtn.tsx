"use client";

import React from "react";
import ShimmerButton from "../ShimmerButton";
import Link from "next/link";
import { Navigation } from "lucide-react";

export default function DownloadCVBtn() {
  return (
    <div className="flex justify-center mt-8">
      {/* Use Link component to wrap the button for download */}
      <Link href="/Jacky-Resume.pdf" download>
        <ShimmerButton
          handleClick={() => {}}
          title={"Check My Resume!"}
          icon={<Navigation className="" />}
          position={"right"}
          otherClasses={""}
        />
      </Link>
    </div>
  );
}
