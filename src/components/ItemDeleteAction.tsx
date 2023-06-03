import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from "react-native";
import { colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface ItemDeleteActionProps extends TouchableWithoutFeedbackProps {}

const ItemDeleteAction: React.FC<ItemDeleteActionProps> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemDeleteAction;
