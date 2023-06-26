import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export interface ActivityIndicatorProps {
  visible?: boolean;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  visible = false,
}) => {
  return visible ? (
    <View style={styles.overlay}>
      <LottieView
        source={require("../animations/loading.json")}
        autoPlay
        loop
      ></LottieView>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
    alignSelf: "center",
  },
});

export default ActivityIndicator;
