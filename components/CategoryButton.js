import React from "react";
import { Button } from "native-base";
import { View, Text, StyleSheet } from "react-native";

const CategoryButton = ({ navigation, category }) => {
  return (
    <View style={styles.box}>
      <Button
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          // backgroundColor: "tomato",
        }}
        onPress={() =>
          navigation.navigate("CategoryItemList", { category: category })
        }
      >
        <Text style={styles.text}>{category}</Text>
      </Button>
    </View>
  );
};

export default CategoryButton;
const styles = StyleSheet.create({
  box: {
    // flex: 1,
    height: 180,
    width: 190,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    fontSize: 30,
    // textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
});
