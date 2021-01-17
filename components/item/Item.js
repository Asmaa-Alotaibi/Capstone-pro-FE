import React from "react";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Containerr,
  ItemCardItem,
  ItemImage,
  ItemName,
  Product,
} from "../../styles";
import { StyleSheet, View } from "react-native";
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
              uri: item.image,
            }}
          />
        </ItemCardItem>
      </TouchableOpacity>
    </Product>
  );
};

export default observer(Item);
