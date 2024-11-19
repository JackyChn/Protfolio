"use client";

import React from "react";
import FormRow from "./FromRow";
import FormInputBox from "./FormInputBox";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

export default function ReachoutWindow() {
  const handleCopy = (info: string) => {
    navigator.clipboard.writeText(info).then(() => {
      if (info === "Jacky Chn") toast.success(`Name copied!😆`);
      if (info === "ccc1020048076@gmail.com") toast.success(`Email copied!😆`);
      if (info === "0490552628") toast.success(`Phone copied!😆`);
    });
  };
  return (
    <div className="flex justify-center items-center max-h-[45vh] py-10">
      <div className="flex flex-wrap p-6 bg-black-200 border border-gray-600 items-center justify-center rounded-md md:w-[60vh] lg:w-[80vh] relative bg-gray-800 flex-col space-y-4">
        <h1 className="flex justify-center items-center text-center font-bold text-2xl pb-4 text-white-200">
          My Contact Information
        </h1>

        {/* fullName row */}
        <FormRow label="Name">
          <div className="flex items-center">
            <FormInputBox
              type="text"
              id="fullName"
              disabled={true}
              placeholder={"Jacky Chn"}
            />
            <button
              className="ml-12 p-2 rounded-md transition-all duration-200 hover:bg-black-100 active:bg-black-100"
              onClick={() => handleCopy("Jacky Chn")}
            >
              <Copy />
            </button>
          </div>
        </FormRow>

        {/* email row */}
        <FormRow label="Email">
          <div className="flex items-center">
            <FormInputBox
              type="text"
              id="email"
              disabled={true}
              placeholder={"ccc1020048076@gmail.com"}
            />
            <button
              className="ml-12 p-2 rounded-md transition-all duration-200 hover:bg-black-100 active:bg-black-100"
              onClick={() => handleCopy("ccc1020048076@gmail.com")}
            >
              <Copy />
            </button>
          </div>
        </FormRow>

        {/* phone row */}
        <FormRow label="Phone">
          <div className="flex items-center">
            <FormInputBox
              type="text"
              id="phone"
              disabled={true}
              placeholder={"0490552628"}
            />
            <button
              className="ml-12 p-2 rounded-md transition-all duration-200 hover:bg-black-100 active:bg-black-100"
              onClick={() => handleCopy("0490552628")}
            >
              <Copy />
            </button>
          </div>
        </FormRow>
      </div>
    </div>
  );
}
