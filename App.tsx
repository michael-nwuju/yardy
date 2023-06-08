import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { navigationTheme } from "./src/constants/NavigationTheme";
import AppNavigator from "./src/navigators/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
