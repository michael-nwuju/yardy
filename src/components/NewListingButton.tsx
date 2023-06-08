import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface NewListingButtonProps extends TouchableOpacityProps {}

const NewListingButton: React.FC<NewListingButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={"plus-circle"}
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    bottom: 20,
    borderWidth: 10,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    backgroundColor: colors.primary,
  },
});

export default NewListingButton;
