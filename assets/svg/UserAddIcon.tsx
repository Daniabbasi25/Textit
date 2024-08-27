import React, { FC } from "react";
import { Circle, Ellipse, Path, Svg } from "react-native-svg";
import { SvgProps } from "@/lib/interfaces";

const UserAddIcon: FC<SvgProps> = ({ width, height, color = "#FFFFFF" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Ellipse
        cx="10"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Circle
        cx="10"
        cy="7"
        r="4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M21 11H17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M19 9L19 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default UserAddIcon;
