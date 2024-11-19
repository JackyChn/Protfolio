import React from "react";

interface FormRowProps {
  label?: string;
  error?: string;
  children: React.ReactElement;
}

const FormRow: React.FC<FormRowProps> = ({ label, error, children }) => {
  // Determine if children include a button to set different styling.
  const hasButton = children && children.type === "button";

  return (
    <div
      className={`${
        hasButton
          ? "flex justify-end gap-3"
          : "grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6"
      } py-3 border-b border-gray-200 last:border-b-0`}
    >
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
};

export default FormRow;
