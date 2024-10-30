import React from "react";

interface SpanProps {
  children: React.ReactNode;
  className?: string;
}

export const Span = ({ children, className = "" }: SpanProps) => {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-blueColor to-violetColor ${className}`}
    >
      {children}
    </span>
  );
};
