import { SchemeColors } from "./GlobalStyles";
import { ReactComponent as LogoLight } from "./assets/logo-light.svg";
import { ReactComponent as LogoDark } from "./assets/logo-dark.svg";

const lightTheme: Theme = {
  logo: LogoDark,
  default: {
    bg: SchemeColors.white,
    fontColor: SchemeColors.black,
  },
  main: {
    bg: SchemeColors.lightBg,
    fontColor: SchemeColors.darkGrey,
  },
  aside: {
    bg: SchemeColors.white,
    fontColor: SchemeColors.black,
  },
  input: {
    bg: SchemeColors.white,
    fontColor: SchemeColors.black,
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
  main: {
    bg: SchemeColors.darkBg,
    fontColor: SchemeColors.white,
  },
  default: {
    bg: SchemeColors.darkBg,
  },
  aside: {
    bg: SchemeColors.darkGrey,
    fontColor: SchemeColors.white,
  },
  input: {
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
