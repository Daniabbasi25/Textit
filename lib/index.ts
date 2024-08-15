import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from "react-native-responsive-screen";

import { PixelRatio, Dimensions, Platform } from "react-native";

const ratio = PixelRatio.get();

export const isIOS = (): boolean => Platform.OS === "ios";
export const getWidth = (width: number) => wd(width);

export const getHeight = (height: number) => hd(height);

export const getFontSize = (size: number) => {
  const { width, height } = Dimensions.get("window");

  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      return size * 0.95;
    } else if (height < 667) {
      return size;
    } else if (height >= 667 && height <= 735) {
      return size * 1.15;
    }

    return size * 1.25;
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.15;
    } else if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    return size * 1.27;
  } else if (ratio >= 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.2;
    } else if (height >= 667 && height <= 735) {
      return size * 1.25;
    }

    return size * 1.4;
  }

  return size;
};

export const fontFamilies = {
  Popins: {
    normal: isIOS() ? "Poppins-Regular" : "PoppinsRegular",
    medium: isIOS() ? "Poppins-Medium" : "PoppinsMedium",
    bold: isIOS() ? "Poppins-Bold" : "PoppinsBold",
  },
};

export const LoadfontFamilies = {
  PoppinsRegular: require("../assets/fonts/PoppinsRegular.ttf"),
  PoppinsMedium: require("../assets/fonts/PoppinsMedium.ttf"),
  PoppinsBold: require("../assets/fonts/PoppinsBold.ttf"),
};
