//rnfes
import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
// declare a data type for the props we will send in
//for this component. In our case here, this data type
//really only applies to this component
//if the data type would be used in many other places
//we would define it seperately and import where needed

//the name is generic because I am only declaring
//the type of props used here - so I'm calling it propsType

type propsType = {
  text: string;
  color?: string; //"?" means optional prop
  backgroundColor?: string;
  fontSize?: number;
  radius: number;
  width: number;
  onPress: () => void;
};

//declare that MyButton uses a data of type propsType
//to send in all the info it needs
//we are going to destructure our props to make it easier
//this is why we put curly braces inside the starting ()
// within our code when the prop values are used

const MyButton: React.FC<propsType> = ({
  text,
  color = "lightblue",
  backgroundColor = "green",
  fontSize = 15,
  width,
  radius,
  onPress,
}) => {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          borderColor: color,
          borderRadius: radius,
          width: width,
        },
      ]}
      onPress={onPress}
      underlayColor={"purple"}
    >
      <View style={styles.row}>
        <AntDesign name="menu" size={24} color="lightblue" />
        <Text style={[styles.buttonText, { color: color, fontSize: fontSize }]}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 50,
    backgroundColor: "pink",
    borderColor: "blue",
    margin: 5,
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 12,
    marginLeft: 7,
    color: "orange",
  },
  row: {
    flexDirection: "row",
    marginRight: 7,
  },
});
