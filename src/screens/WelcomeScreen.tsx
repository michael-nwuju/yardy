import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don&apos;t need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" />
        <Button title="Register" variant="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    alignItems: "center",
    position: "absolute",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
