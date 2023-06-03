import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconName } from "../types/icon.type";

export interface IconProps {
  name: IconName;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  const styles = StyleSheet.create({
    view: {
      width: size,
      height: size,
      backgroundColor,
      borderRadius: size / 2,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.view}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;
