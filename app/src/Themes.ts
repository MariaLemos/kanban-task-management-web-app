import { SchemeColors } from "./GlobalStyles";

const lightTheme: Theme = {
  dropdown: {
    bg: SchemeColors.white,
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
  dropdown: {
    bg: SchemeColors.darkBg,
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
