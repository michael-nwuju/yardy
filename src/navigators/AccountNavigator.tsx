import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { navigation } from "../constants/navigation";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

export interface AccountNavigatorProps {}

const AccountNavigator: React.FC<AccountNavigatorProps> = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name={navigation.account}>
        {({ navigation, route }) => <AccountScreen />}
      </Stack.Screen>
      <Stack.Screen name={navigation.messages}>
        {({ navigation, route }) => <MessagesScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AccountNavigator;
