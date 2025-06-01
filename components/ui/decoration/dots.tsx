import React from "react";

interface Dots {
  row?: number;
  col?: number;
  size?: number;
  gap?: number;
  className?: string;
}

function Dots({
  row = 5,
  col = 5,
  size = 4,
  gap = 16,
  className,
  ...props
}: Dots) {
  const dots = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          className="rounded-full bg-[var(--gray)]"
          style={{ width: size, height: size }}
        />
      );
    }
  }

  return (
    <div
      className={`absolute grid ${className}`}
      style={{ gridTemplateColumns: `repeat(${col}, auto)`, gap: gap }}
      {...props}
    >
      {dots}
    </div>
  );
}

export default Dots;
