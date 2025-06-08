import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-4 sm:px-2 md:px-10 xl:px-20 max-w-[2520px] mx-auto h-full">
      {children}
    </div>
  );
};

export default Container;
