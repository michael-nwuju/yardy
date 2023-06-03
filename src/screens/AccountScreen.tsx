import React from "react";
import Avatar from "../components/Avatar";
import { FlatList, StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
import Icon from "../components/Icon";
import { IconName } from "../types/icon.type";
import ItemSeparator from "../components/ItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted" as IconName,
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email" as IconName,
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Avatar
          title="Michael Nwuju"
          subTitle="michaelnwuju213@gmail.com"
          image={{ uri: "https://picsum.photos/200/300" }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <Avatar
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
      <Avatar
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default AccountScreen;
