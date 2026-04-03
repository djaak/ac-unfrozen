"use client";

import { ChevronRight } from "lucide-react";

interface SmoothScrollButtonProps {
  targetId: string;
  className?: string;
}

export default function SmoothScrollButton({ targetId, className }: SmoothScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      Our Services
      <ChevronRight className="w-5 h-5" />
    </button>
  );
}
