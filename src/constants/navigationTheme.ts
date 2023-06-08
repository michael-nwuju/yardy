import { DefaultTheme, Theme } from "@react-navigation/native";
import { colors } from "./colors";

export const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
