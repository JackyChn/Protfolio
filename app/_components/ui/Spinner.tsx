import React from "react";

export default function Spinner() {
  return (
    <div
      className="mx-auto my-20 h-10 w-10 animate-spin rounded-full border-4 border-solid border-purple-500 border-t-transparent"
      style={{
        borderTopColor: "transparent",
        borderRadius: "50%",
      }}
    ></div>
  );
}
