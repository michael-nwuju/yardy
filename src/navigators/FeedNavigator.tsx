import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { navigation } from "../constants/navigation";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

export interface FeedNavigatorProps {}

const FeedNavigator: React.FC<FeedNavigatorProps> = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name={navigation.listings}>
        {({ navigation, route }) => <ListingsScreen />}
      </Stack.Screen>
      <Stack.Screen name={navigation.listingDetail}>
        {({ navigation, route }) => <ListingDetailScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FeedNavigator;
