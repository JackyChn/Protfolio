import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      className="
        border border-gray-300
        min-w-[30vh]
        bg-black-200
        rounded-sm
        shadow-sm
        px-3 py-2
      "
      {...props}
    />
  );
};

export default Input;
