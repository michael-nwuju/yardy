import React from "react";
import Text from "../Text";
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export interface ErrorMessageProps {
  error?: string;
  touched?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error = "",
  touched = false,
}) => {
  if (!error || !touched) {
    return null;
  }

  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: { color: colors.danger },
});

export default ErrorMessage;
