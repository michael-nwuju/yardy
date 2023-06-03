import React from "react";
import {
  ButtonProps as Props,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors } from "../constants/colors";

export interface ButtonProps extends Props {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[variant] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    textTransform: "uppercase",
  },
});

export default Button;
