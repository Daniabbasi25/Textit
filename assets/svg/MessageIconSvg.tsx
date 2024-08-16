import { View, Text } from "react-native";
import React, { FC } from "react";
import { Path, Svg } from "react-native-svg";
import { SvgProps } from "@/lib/interfaces";

const MessageIconSvg: FC<SvgProps> = ({ width, height, color = "#3D4A7A" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5031 15.7623C20.2939 14.354 20.75 12.7312 20.75 11C20.75 5.61475 16.3853 1.25 11 1.25C5.61475 1.25 1.25 5.61475 1.25 11C1.25 16.3853 5.61475 20.75 11 20.75C12.7312 20.75 14.354 20.2939 15.7623 19.5031L20.75 20.75L19.5031 15.7623Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8083 11.3499C10.9144 11.2438 11.0856 11.2438 11.1918 11.3499C11.2979 11.4561 11.2979 11.6273 11.1918 11.7334C11.0856 11.8396 10.9144 11.8396 10.8083 11.7334C10.7032 11.6273 10.7032 11.4561 10.8083 11.3499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.47488 11.3499C6.58104 11.2438 6.75221 11.2438 6.85838 11.3499C6.96454 11.4561 6.96454 11.6273 6.85838 11.7334C6.75221 11.8396 6.58104 11.8396 6.47488 11.7334C6.36979 11.6273 6.36979 11.4561 6.47488 11.3499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1416 11.3499C15.2478 11.2438 15.419 11.2438 15.5251 11.3499C15.6313 11.4561 15.6313 11.6273 15.5251 11.7334C15.419 11.8396 15.2478 11.8396 15.1416 11.7334C15.0365 11.6273 15.0365 11.4561 15.1416 11.3499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MessageIconSvg;
