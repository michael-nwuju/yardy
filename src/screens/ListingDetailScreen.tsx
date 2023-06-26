import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "../components/Text";
import { colors } from "../constants/colors";
import Avatar from "../components/Avatar";
import { useRoute } from "@react-navigation/native";
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailScreen: React.FC = () => {
  const route = useRoute();

  const params = route.params as any;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          tint="light"
          style={styles.image}
          uri={params.images?.[0]?.url}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{params.title}</Text>
          <Text style={styles.price}>{params.price}</Text>
          <View style={styles.userContainer}>
            <Avatar
              title="Michael Nwuju"
              subTitle="2 listings"
              image={{ uri: params.images?.[0]?.thumbnailUrl }}
            />
          </View>
        </View>
        <ContactSellerForm listing={params} />
      </View>
    </KeyboardAvoidingView>
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
