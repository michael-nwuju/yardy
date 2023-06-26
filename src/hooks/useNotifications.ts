import { useEffect } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import { registerToken } from "../api/tokens";
import { Platform } from "react-native";

export default function useNotifications(
  receivedListener?: (event: Notifications.Notification) => void,
  responseReceivedListener?: (event: Notifications.NotificationResponse) => void
) {
  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      token = (await Notifications.getExpoPushTokenAsync()).data;

      registerToken(token);
    }

    return token;
  };

  useEffect(() => {
    registerForPushNotificationsAsync();

    let receivedSubscription: Notifications.Subscription | null = null;
    let responseReceivedSubscription: Notifications.Subscription | null = null;

    if (receivedListener) {
      receivedSubscription =
        Notifications.addNotificationReceivedListener(receivedListener);
    }

    if (responseReceivedListener) {
      responseReceivedSubscription =
        Notifications.addNotificationResponseReceivedListener(
          responseReceivedListener
        );
    }

    return () => {
      if (receivedSubscription) {
        receivedSubscription.remove();
      }
      if (responseReceivedSubscription) {
        responseReceivedSubscription.remove();
      }
    };
  }, []);
}
