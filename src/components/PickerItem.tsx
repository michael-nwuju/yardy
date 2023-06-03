import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Text from "./Text";
import { IconProps } from "./Icon";

export interface PickerItemType {
  label: string;
  value?: any;
  icon?: IconProps;
}

export interface PickerItemProps extends TouchableOpacityProps {
  item: PickerItemType;
}

const PickerItem: React.FC<PickerItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
