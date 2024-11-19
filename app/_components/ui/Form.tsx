import React, { ReactNode } from "react";

export default function Form({
  type = "regular",
  children,
  ...props
}: {
  type: string;
  children: ReactNode;
}) {
  const formClassNames = `
    ${
      type === "regular"
        ? "p-6 bg-gray-50 border border-gray-200 rounded-md"
        : ""
    }
    ${type === "modal" ? "w-[80rem]" : ""}
    overflow-hidden text-sm
  `;

  return (
    <form className={formClassNames} {...props}>
      {children}
    </form>
  );
}
