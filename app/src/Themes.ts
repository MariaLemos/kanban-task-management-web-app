import { SchemeColors } from "./GlobalStyles";
import { ReactComponent as LogoLight } from "./assets/logo-light.svg";
import { ReactComponent as LogoDark } from "./assets/logo-dark.svg";

const lightTheme: Theme = {
  logo: LogoDark,
  line: SchemeColors.lightLines,
  titleColor: SchemeColors.black,
  default: {
    bg: SchemeColors.white,
    fontColor: SchemeColors.mediumGrey,
  },
  main: {
    bg: SchemeColors.lightBg,
    fontColor: SchemeColors.darkGrey,
  },
  buttons: {
    primary: {
      bg: SchemeColors.mainPurple,
      hover: SchemeColors.mainPurpleHover,
      fontColor: SchemeColors.white,
    },
    secondary: {
      bg: "#635FC71A",
      fontColor: SchemeColors.mainPurple,
      hover: "#635FC740",
    },
    destructive: {
      bg: SchemeColors.red,
      fontColor: SchemeColors.white,
      hover: SchemeColors.redHover,
    },
  },
};
const darkTheme: Theme = {
  logo: LogoLight,
  line: SchemeColors.darkLines,
  titleColor: SchemeColors.white,
  main: {
    bg: SchemeColors.darkBg,
    fontColor: SchemeColors.mediumGrey,
  },
  default: {
    bg: SchemeColors.darkGrey,
    fontColor: SchemeColors.white,
  },
  buttons: {
    primary: {
      bg: SchemeColors.mainPurple,
      hover: SchemeColors.mainPurpleHover,
      fontColor: SchemeColors.white,
    },
    secondary: {
      bg: SchemeColors.white,
      fontColor: SchemeColors.mainPurple,
      hover: SchemeColors.white,
    },
    destructive: {
      bg: SchemeColors.red,
      fontColor: SchemeColors.white,
      hover: SchemeColors.redHover,
    },
  },
};
export const themeMap = {
  light: { ...SchemeColors, ...lightTheme },
  dark: { ...SchemeColors, ...darkTheme },
};
