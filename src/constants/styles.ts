import { Platform, StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
