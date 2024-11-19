import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { ReactNode, useRef, MouseEvent } from "react";

function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  // Specify the type of ref: it refers to an HTMLDivElement or null initially
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose(); // Close modal when clicked outside
    }
  };

  return createPortal(
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-all duration-500 flex items-center justify-center"
    >
      <div
        ref={modalRef}
        className="relative rounded-lg shadow-lg p-8 w-[90%] max-w-[600px] transition-all duration-500"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 p-2 rounded-md transition-all duration-200 hover:bg-gray-700"
        >
          <HiXMark className="w-6 h-6 text-gray-500" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
