import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Button,
  FlatList,
  FlatListProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { IconName } from "../types/icon.type";

import Text from "./Text";
import Screen from "./Screen";
import PickerItem, { PickerItemProps, PickerItemType } from "./PickerItem";
import { omit } from "lodash";

export interface PickerProps extends Partial<FlatListProps<PickerItemType>> {
  icon?: IconName;
  placeholder: string;
  items?: PickerItemType[];
  selectedItem?: PickerItemType;
  onSelectItem?: (item: PickerItemType) => any;
  PickerItemComponent?: React.FC<PickerItemProps>;
  keyExtractor?: (item: any, index: number) => string;
}

const Picker: React.FC<PickerProps> = ({
  icon,
  items = [],
  placeholder,
  keyExtractor,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
  ...props
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpenModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={selectedItem ? styles.text : styles.placeholder}>
            {selectedItem?.label || placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={openModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setOpenModal(false)} />
          <FlatList
            data={items}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setOpenModal(false);
                  if (onSelectItem) {
                    onSelectItem(item);
                  }
                }}
              />
            )}
            {...omit(props, ["data", "keyExtractor", "renderItem"])}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
  icon: {
    marginRight: 10,
  },
});

export default Picker;
