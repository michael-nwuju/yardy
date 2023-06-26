import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { navigation } from "../constants/navigation";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "../components/NewListingButton";
import useNotifications from "../hooks/useNotifications";

export interface AppNavigatorProps {}

const AppNavigator: React.FC<AppNavigatorProps> = () => {
  const Tab = createBottomTabNavigator();

  useNotifications();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="home" />
          ),
        }}
        name={navigation.feed}
      >
        {() => <FeedNavigator />}
      </Tab.Screen>
      <Tab.Screen
        options={({ navigation: { navigate } }) => ({
          tabBarButton: ({}) => (
            <NewListingButton
              onPress={() => navigate(navigation.listingEdit)}
            />
          ),

          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="plus-circle"
            />
          ),
        })}
        name={navigation.listingEdit}
      >
        {() => <ListingEditScreen />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="account" />
          ),
        }}
        name={navigation.profile}
      >
        {() => <AccountNavigator />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
