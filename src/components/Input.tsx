import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { IconName } from "../types/icon.type";
import { omit } from "lodash";
import { globalStyles } from "../constants/styles";

export interface InputProps extends TextInputProps {
  icon?: IconName;
  style?: TextStyle;
}

const Input: React.FC<InputProps> = ({ icon, style, ...props }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        {...omit(props, ["icon"])}
        placeholderTextColor={colors.medium}
        style={[globalStyles.text, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: colors.light,
  },
  icon: {
    marginRight: 10,
  },
});

export default Input;
