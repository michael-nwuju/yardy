import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import ListingDetailScreen from "./src/screens/ListingDetailScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import Screen from "./src/components/Screen";
import LoginScreen from "./src/screens/LoginScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen";

export default function App() {
  return (
    // <ListingDetailScreen />
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red Jacket for sale"
    //     subTitle="$100"
    //     image={{ uri: "https://picsum.photos/200/300" }}
    //   />
    // </View>
    // <Button title="Selo" onPress={() => console.log("ta[[ed")} />
    // <ListingsScreen />
    // <ViewImageScreen />
    // <AccountScreen />
    // <MessagesScreen />
    // <ListingEditScreen />
    // <LoginScreen />
    <Screen>
      <WelcomeScreen />
    </Screen>
  );
}
