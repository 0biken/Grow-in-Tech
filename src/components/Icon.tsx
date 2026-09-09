import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import React from "react";

export interface IconProps extends PhosphorIconProps {
  icon: React.ElementType<PhosphorIconProps>;
  label?: string;
}

export const Icon = ({ icon: IconComponent, label, weight = "regular", size = 20, ...props }: IconProps) => {
  const ariaProps = label 
    ? { "aria-label": label, "aria-hidden": undefined } 
    : { "aria-hidden": true };

  return (
    <IconComponent weight={weight} size={size} {...ariaProps} {...props} />
  );
};
