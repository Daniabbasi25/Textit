export const generateColorVariants = (count: number): string[] => {
  // Function to generate lighter or darker variants of a base color
  const lightenColor = (color: string, percent: number): string => {
    const R = parseInt(color.substring(1, 3), 16);
    const G = parseInt(color.substring(3, 5), 16);
    const B = parseInt(color.substring(5, 7), 16);

    const newR = Math.min(
      255,
      Math.max(0, Math.round(R + (255 - R) * percent))
    );
    const newG = Math.min(
      255,
      Math.max(0, Math.round(G + (255 - G) * percent))
    );
    const newB = Math.min(
      255,
      Math.max(0, Math.round(B + (255 - B) * percent))
    );

    return `#${((1 << 24) | (newR << 16) | (newG << 8) | newB)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  };

  const darkenColor = (color: string, percent: number): string => {
    return lightenColor(color, -percent);
  };

  // Base colors
  const baseColors = [
    "#FBDC94", // Dark Purple
    "#98A1F1", // White
    "#F5B7BE", // White
    "#FFC746", // White
  ];

  // Generate variants for each base color
  const colorVariants = baseColors.flatMap((base) => [
    lightenColor(base, 0.3), // Light variant
    lightenColor(base, 0.5), // Lighter variant
    darkenColor(base, 0.3), // Dark variant
    darkenColor(base, 0.5), // Darker variant
  ]);

  // Ensure distinct colors by slicing the required number
  const distinctColors = Array.from(new Set(colorVariants)).slice(0, count);

  // Fill with random base colors if there aren't enough variants
  while (distinctColors.length < count) {
    const randomColor =
      baseColors[Math.floor(Math.random() * baseColors.length)];
    if (!distinctColors.includes(randomColor)) {
      distinctColors.push(randomColor);
    }
  }

  return distinctColors;
};
