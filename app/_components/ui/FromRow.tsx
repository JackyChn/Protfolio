import React, { ReactNode } from "react";

interface FormRowProps {
  label?: ReactNode;
  error?: string;
  children: React.ReactElement;
}

const FormRow: React.FC<FormRowProps> = ({ label, error, children }) => {
  return (
    <div
      className="
        flex md:flex-row md:justify-between items-center
        md:px-3 py-3 px-4 
        md:w-20 text-white-200 
        w-30
        border-b border-gray-800 last:border-b-0 
        min-w-full
      "
    >
      {label && (
        <label className="font-medium md:pr-8 mb-2 md:mb-0">{label}</label>
      )}
      <div className="flex flex-col w-full md:w-auto">
        {children}
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    </div>
  );
};

export default FormRow;
