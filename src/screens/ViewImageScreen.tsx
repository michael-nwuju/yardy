import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <MaterialCommunityIcons name="close" color={"white"} size={30} />
      </View>
      <View style={styles.delete}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={"white"}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  close: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
});

export default ViewImageScreen;
