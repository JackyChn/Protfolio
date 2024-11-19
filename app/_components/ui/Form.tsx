import React, { ReactNode } from "react";

export default function Form({ children, ...props }: { children: ReactNode }) {
  return (
    <form
      className="flex flex-wrap p-6 bg-black-200 border border-gray-600 items-center justify-center rounded-md max-w-[100vh]"
      {...props}
    >
      {children}
    </form>
  );
}
