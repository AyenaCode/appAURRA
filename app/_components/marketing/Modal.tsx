import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="float-right text-2xl font-bold" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
