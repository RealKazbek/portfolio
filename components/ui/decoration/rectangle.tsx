import React from "react";

interface Rectangle {
  width?: number;
  height?: number;
  className?: string;
}

function Rectangle({
  width = 150,
  height = 150,
  className,
  ...props
}: Rectangle) {
  return (
    <div
      className={`absolute ${className} border border-[var(--gray)]`}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    ></div>
  );
}

export default Rectangle;
