import * as React from "react";
import { Alert, View } from "react-native";
import { Menu } from "react-native-paper";

const MyComponent = () => (
  <View style={{ flex: 1 }}>
    <Menu.Item
      onPress={() => {
        Alert.alert("This is not enough");
      }}
      title="Donate"
    />
    <Menu.Item
      onPress={() => {
        Alert.alert("Absolutely Not");
      }}
      title="Send to Zoo"
    />
    <Menu.Item
      onPress={() => {
        Alert.alert("We'll send her right away!");
      }}
      title="Adopt"
    />
  </View>
);

export default MyComponent;
