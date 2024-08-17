import { Colors } from "@/theme";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

interface AvatarProps {
  uri: string;
  storyCount: number;
  colors?: string[];
}

const AvatarWithSegmentedBorder: React.FC<AvatarProps> = ({
  uri,
  storyCount,
  colors = ["red", "green", "blue"],
}) => {
  const size = 80; // Size of the avatar including border
  const radius = 35; // Radius of the inner circle (avatar size/2 minus some padding)
  const strokeWidth = 5; // Thickness of each segment
  const angle = 360 / storyCount; // Angle covered by each segment

  const createSegments = () => {
    return Array.from({ length: storyCount }).map((_, index) => {
      const startAngle = index * angle;
      const endAngle = startAngle + angle;
      const largeArcFlag = angle > 180 ? 1 : 0;

      // Calculate segment start and end points
      const startX =
        size / 2 + radius * Math.cos((startAngle - 90) * (Math.PI / 180));
      const startY =
        size / 2 + radius * Math.sin((startAngle - 90) * (Math.PI / 180));

      const endX =
        size / 2 + radius * Math.cos((endAngle - 90) * (Math.PI / 180));
      const endY =
        size / 2 + radius * Math.sin((endAngle - 90) * (Math.PI / 180));

      // Special case for a single segment
      const pathData =
        storyCount === 1
          ? `M ${size / 2},${
              size / 2
            } m ${-radius},0 a ${radius},${radius} 0 1,0 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,0 ${-radius * 2},0`
          : `M ${size / 2},${
              size / 2
            } L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} Z`;

      return (
        <Path
          key={index}
          d={pathData}
          stroke={colors[index % colors.length]}
          strokeWidth={strokeWidth}
          fill="none"
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Svg height={size} width={size} style={styles.svgContainer}>
        {createSegments()}
      </Svg>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.avatar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  svgContainer: {
    position: "absolute",
  },
  avatar: {
    width: 64,
    height: 65,
    borderRadius: 35,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#1C2755",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AvatarWithSegmentedBorder;
