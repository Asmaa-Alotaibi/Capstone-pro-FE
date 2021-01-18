import React from "react";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import ip from "../../stores/ipaddress";
import {
  Containerr,
  ItemCardItem,
  ItemImage,
  ItemName,
  Product,
} from "../../styles";

const Item = ({ item, navigation }) => {
  return (
    // <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemDetail", { item: item })}
    >
      <View style={styles.box}>
        {/* <ItemName>{item.name}</ItemName> */}

 
        <ItemImage
          source={{
            uri: item.image,
          }}
        />
      </View>
    </TouchableOpacity>
    // </View>
 
  );
};

export default observer(Item);
const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 180,
    width: 180,
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
    margin: 10,
  },
  numberD: {
    fontSize: 30,
    color: "green",
  },
  numberP: {
    fontSize: 30,
    color: "red",
  },
  text: {
    fontSize: 20,
  },
  username: {
    fontSize: 35,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
});
