import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export interface ScreenProps {
  children: React.ReactElement | React.ReactElement[];
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.view}>
      <>{children}</>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: { paddingTop: Constants.statusBarHeight, flex: 1 },
});

export default Screen;
