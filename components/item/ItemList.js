import { Spinner } from "native-base";
import React from "react";
import Item from "./Item";
import itemStore from "../../stores/itemStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { Containerr } from "../../styles";

const ItemList = ({ items, navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (itemStore.loading) return <Spinner />;

  // how can you simplify this code to repeat repetitive code?
  const itemList = items
    ? items.map((item) => (
        <Item item={item} key={item.id} navigation={navigation} />
      ))
    : itemStore.items.map((item) => (
        <Item item={item} key={item.id} navigation={navigation} />
      ));

  return <Containerr>{itemList}</Containerr>;
};
export default observer(ItemList);
