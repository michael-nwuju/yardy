import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import { navigation } from "../constants/navigation";

export default function WelcomeScreen() {
  const { navigate } = useNavigation();
  return (
    <Screen>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell what you don&apos;t need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Login"
            onPress={() => navigate(navigation.login as never)}
          />
          <Button
            title="Register"
            variant="secondary"
            onPress={() => navigate(navigation.register as never)}
          />
        </View>
      </ImageBackground>
    </Screen>
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
