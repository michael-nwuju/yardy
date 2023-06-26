import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { toCurrency } from "../utilities/to-currency";
import { colors } from "../constants/colors";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import { navigation } from "../constants/navigation";
import { getListings } from "../api/listings";
import Text from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingsScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const {
    request: loadListings,
    data: listings,
    error,
    loading,
  } = useApi({ api: getListings });

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen>
      <View style={styles.screen}>
        {error && (
          <>
            <Text>Couldn't retrieve the listings</Text>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}
        <ActivityIndicator visible={loading} />
        <FlatList
          data={listings}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={loadListings} />
          }
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={toCurrency(item.price)}
              thumbnail={item.images?.[0]?.thumbnailUrl}
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
