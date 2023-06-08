import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { navigation } from "../constants/navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

export interface AuthNavigatorProps {}

const AuthNavigator: React.FC<AuthNavigatorProps> = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigation.welcome} options={{ headerShown: false }}>
        {({ navigation, route }) => <WelcomeScreen />}
      </Stack.Screen>
      <Stack.Screen name={navigation.login}>
        {({ navigation, route }) => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name={navigation.register}>
        {({ navigation, route }) => <RegisterScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AuthNavigator;
