"use client";

import { cn } from "@/utils/helpers";
import React from "react";

type buttonProps = {
  onClick: () => void;
  className?: string;
};

const Button: React.FC<buttonProps> = ({ className, onClick }) => {
  return (
    <button type="button" className={cn(className)} onClick={onClick}>
      Have a good coding
    </button>
  );
};
export default Button;
