import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24,
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <linearGradient id="a11">
        <stop offset="0" stopColor="#18020A" stopOpacity="0"></stop>
        <stop offset="1" stopColor="#18020A"></stop>
      </linearGradient>
      <circle
        fill="none"
        stroke="url(#a11)"
        strokeWidth={15}
        strokeLinecap="round"
        strokeDasharray="0 44 0 44 0 44 0 44 0 360"
        cx={100}
        cy={100}
        r={70}
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="discrete"
          dur="2"
          values="0 100 100; 360 100 100"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  );
};
