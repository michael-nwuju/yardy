import React from "react";
import { Text as AppText, TextProps as Props } from "react-native";
import { globalStyles } from "../constants/styles";
import { omit } from "lodash";

export interface TextProps extends Props {}

const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
  return (
    <AppText
      style={[globalStyles.text, style]}
      {...omit(props, ["children", "style"])}
    >
      {children}
    </AppText>
  );
};

export default Text;
