import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { navigationTheme } from "./src/constants/navigationTheme";
import AppNavigator from "./src/navigators/AppNavigator";
import OfflineNotice from "./src/components/OfflineNotice";
import { useEffect, useState } from "react";
import { AuthContext, User } from "./src/auth/context";
import * as authStorage from "./src/auth/storage";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [user, setUser] = useState<User | undefined>();

  const restoreUser = async () => {
    const user = await authStorage.getUser();

    if (user) {
      setUser(user as any);
    }

    SplashScreen.hideAsync();
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
