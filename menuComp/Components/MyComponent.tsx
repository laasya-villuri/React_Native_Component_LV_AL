import * as React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";

const [visible, setVisible] = React.useState(false);

const openMenu = () => setVisible(true);

const closeMenu = () => setVisible(false);

const MyComponent = () => (
  <View style={{ flex: 1 }}>
    <Menu.Item leadingIcon="Add" onPress={() => {}} title="Donate" />
    <Menu.Item leadingIcon="Remove" onPress={() => {}} title="Send to Zoo" />
    <Menu.Item leadingIcon="Close" onPress={() => {}} title="Adopt" />
    <Menu.Item leadingIcon="Close" onPress={() => {}} title="Close" />
  </View>
);

export default MyComponent;
