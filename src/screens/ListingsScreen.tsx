import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { toCurrency } from "../utilities/to-currency";
import { colors } from "../constants/colors";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import { navigation } from "../constants/navigation";
import { getListings } from "../api/listings";

const ListingsScreen: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);
  const { navigate } = useNavigation();

  const loadListings = async () => {
    const { data, ok } = await getListings();

    if (ok) {
      setListings(data as any[]);
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen>
      <View style={styles.screen}>
        <FlatList
          data={listings}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={toCurrency(item.price)}
              image={{ uri: item.images?.[0]?.url }}
              onPress={() =>
                navigate(navigation.listingDetail as never, item as never)
              }
            />
          )}
        />
      </View>
    </Screen>
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
