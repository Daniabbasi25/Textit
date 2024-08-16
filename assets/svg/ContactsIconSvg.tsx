import { View, Text } from "react-native";
import React, { FC } from "react";
import { Circle, Path, Svg } from "react-native-svg";
import { SvgProps } from "@/lib/interfaces";

const ContactsIconSvg: FC<SvgProps> = ({
  width,
  height,
  color = "#3D4A7A",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Circle
        cx="13"
        cy="13"
        r="10.8333"
        stroke={color}
        stroke-opacity="0.39"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4167 18.4167C16.8119 17.0361 14.9651 16.25 13 16.25C11.0349 16.25 9.18821 17.0361 7.58337 18.4167"
        stroke={color}
        stroke-opacity="0.39"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Circle
        cx="3.25"
        cy="3.25"
        r="3.25"
        transform="matrix(1 0 0 -1 9.75 13)"
        stroke={color}
        stroke-opacity="0.39"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ContactsIconSvg;
