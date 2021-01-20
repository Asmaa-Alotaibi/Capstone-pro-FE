import React from "react";
import { Button } from "native-base";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { observer } from "mobx-react";

const CategoryButton = ({ navigation, category }) => {
  console.log(category.name);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CategoryItemList", { category: category.name })
      }
    >
      <View style={styles.box}>
        <ImageBackground
          source={category.image}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            // backgroundColor: "tomato",
          }}
        >
          <View style={styles.textBox}>
            <Text style={styles.text}>{category.lable}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default observer(CategoryButton);
const styles = StyleSheet.create({
  box: {
    // flex: 1,
    height: 170,
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
    fontSize: 25,
    color: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 5,
    shadowRadius: 5,

    elevation: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  textBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#7d7e8073",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
