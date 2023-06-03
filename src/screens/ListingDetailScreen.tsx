import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../components/Text";
import { colors } from "../constants/colors";
import Avatar from "../components/Avatar";

const ListingDetailScreen: React.FC = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Red Jacket For Sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
          <Avatar
            title="Michael Nwuju"
            subTitle="2 listings"
            image={{ uri: "https://picsum.photos/70/70" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailScreen;
