import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 w-fit bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {children}
    </button>
  );
}
