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
    <Product>
      <TouchableOpacity
        onPress={() => navigation.navigate("ItemDetail", { item: item })}
      >
        <ItemCardItem>
          {/* <ItemName>{item.name}</ItemName> */}

          <ItemImage
            source={{
              // uri: item.image,
              uri: item.image.replace("localhost", ip),
            }}
          />
        </ItemCardItem>
      </TouchableOpacity>
    </Product>
  );
};

export default observer(Item);
