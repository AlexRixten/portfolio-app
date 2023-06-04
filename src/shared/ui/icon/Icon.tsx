import React from "react";
import { EIcon } from "../../enums/icon.enum";
import { ICONS_LIST } from "@/shared/mockData/icon";

interface IProps {
  size: number;
  color?: string;
  name: EIcon;
  props?: any;
}

export const Icon = ({
  size = 16,
  color = "#000000",
  name,
  ...props
}: IProps) => {
  if (!ICONS_LIST[name]) return null;

  const { viewBox, data } = ICONS_LIST[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || "0 0 512 512"}
      height={size}
      width={size}
      fill={color}
      {...props}
    >
      {data}
    </svg>
  );
};
