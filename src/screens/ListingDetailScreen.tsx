import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../components/Text";
import { colors } from "../constants/colors";
import Avatar from "../components/Avatar";
import Screen from "../components/Screen";
import { useRoute } from "@react-navigation/native";

const ListingDetailScreen: React.FC = () => {
  const route = useRoute();
  const params = route.params as any;
  return (
    <Screen>
      <View>
        <Image style={styles.image} source={{ uri: params.image }} />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{params.title}</Text>
          <Text style={styles.price}>{params.price}</Text>
          <View style={styles.userContainer}>
            <Avatar
              title="Michael Nwuju"
              subTitle="2 listings"
              image={{ uri: "https://picsum.photos/70/70" }}
            />
          </View>
        </View>
      </View>
    </Screen>
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
