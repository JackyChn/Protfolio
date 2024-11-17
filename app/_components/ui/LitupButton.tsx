import React from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function LitupButton({
  title,
  handleClick,
}: {
  title: string;
  handleClick: () => void;
}) {
  return (
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="flex px-8 py-2 items-center bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent gap-2">
        <IoCopyOutline />
        {title}
      </div>
    </button>
  );
}
