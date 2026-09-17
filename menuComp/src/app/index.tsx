import { StyleSheet, Text, View } from "react-native";
import MyComponent from "../../Components/MyComponent";
//this is where we import components that are provided
//by RN. Notice they start wit ha capital letter
// Forgetting to import is a super common error

export default function Index() {
  return (
    <View style={styles.container}>
      <MyComponent />
      <Text style={styles.titleText}>Mobile Apps</Text>
      <Text style={styles.bodyText}>Alex</Text>
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
