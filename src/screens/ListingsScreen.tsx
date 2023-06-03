import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { toCurrency } from "../utilities/to-currency";
import { colors } from "../constants/colors";

const listings = [
  {
    id: 1,
    price: 100,
    title: "Red Jacket for sale",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 2,
    price: 1000,
    title: "Couch in great condition",
    image: "https://picsum.photos/200/300",
  },
];

const ListingsScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={toCurrency(item.price)}
            image={{ uri: item.image }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
