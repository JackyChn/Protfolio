import React, { ReactNode } from "react";

interface FormRowProps {
  label?: ReactNode;
  error?: string;
  children: React.ReactElement;
}

const FormRow: React.FC<FormRowProps> = ({ label, error, children }) => {
  return (
    <div
      className={
        "flex justify-between items-center py-3 px-8 border-b border-gray-800 last:border-b-0 min-w-full"
      }
    >
      {label && <label className="font-medium pr-4">{label}</label>}

      {/* Wrap input and error in a container with flex-grow */}
      <div className="flex flex-col min-w-96">
        {children}
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    </div>
  );
};

export default FormRow;
