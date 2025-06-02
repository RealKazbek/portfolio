import React from "react";

interface CardProps {
  stack: string;
  skills: Array<string>;
}

function SkillsCard({ stack, skills, ...props }: CardProps) {
  return (
    <div className="border border-[var(--gray)]" {...props}>
      <div className="font-semibold text-white p-2">{stack}</div>
      <div className="flex gap-2 flex-wrap border-t border-[var(--gray)] p-2">
        {skills.map((item, index) => (
          <span key={index} className="bg-white/10 px-2 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
