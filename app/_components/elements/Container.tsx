import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = (props: Props): React.ReactNode => {
  return (
    <div className={`${props.className} max-w-7xl mx-auto px-4`}>
      {props.children}
    </div>
  );
};
