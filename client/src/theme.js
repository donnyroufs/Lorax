import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: "Source Sans Pro",
    body: "Source Sans Pro"
  },
  fontSizes: {
    xs: "0.7rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  colors: {
    ...theme.colors,
    dark: "#5A4F6B",
    purple: "#A264FF",
    lightPurple: "#E9DAFF",
    borderGray: "#E8E8E8",
    background: "#F6F6F6",
    white: "#fff"
  }
};
