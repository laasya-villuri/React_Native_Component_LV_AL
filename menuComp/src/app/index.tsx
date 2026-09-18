import { Image, StyleSheet, Text, View } from "react-native";
import MyComponent from "../../Components/MyComponent";
import { useState } from "react";
import MyButton from "../../Components/MyButton";
import * as React from "react";

//this is where we import components that are provided
//by RN. Notice they start wit ha capital letter
// Forgetting to import is a super common error

export default function Index() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Help the Sloth</Text>
      <Text style={styles.bodyText}>Alex and Laasya</Text>
      <View>
        <Image source={require("../../assets/images/pics/sloth.png")} />

        <MyButton
          text="Open Menu"
          radius={10}
          onPress={() => {
            handleVisible();
          }}
        />
        {visible && <MyComponent />}
      </View>
    </View>
  );
}

// rnss
// within styles I will define any styles I want for this page
//Later we will learn how to define styles externally so they
//can be used across many files
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 28, // notice no '' around numerical values
    color: "purple", //there are '' around string values,
    // or predefined options
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 18,
    color: "#338855",
  },
});
