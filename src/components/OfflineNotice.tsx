import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { colors } from "../constants/colors";
import Constants from "expo-constants";
import { NetInfoStateType, useNetInfo } from "@react-native-community/netinfo";

export interface OfflineNoticeProps {}

const OfflineNotice: React.FC<OfflineNoticeProps> = () => {
  const network = useNetInfo();

  if (
    network.type !== NetInfoStateType.unknown &&
    network.isInternetReachable === false
  ) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  } else return null;
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: 50,
    width: "100%",
    position: "absolute",
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
