import { Container, Spinner, View } from "native-base";
import React from "react";
import Item from "./Item";
import itemStore from "../../stores/itemStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { Containerr } from "../../styles";
import { ScrollView, StyleSheet } from "react-native";

const ItemList = ({ items, navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (itemStore.loading) return <Spinner />;
  const itemList = items
    ? items.map((item) => (
        <Item item={item} key={item.id} navigation={navigation} />
      ))
    : itemStore.items.map((item) => (
        <Item item={item} key={item.id} navigation={navigation} />
      ));

  return (
    <ScrollView>
      <Containerr>{itemList}</Containerr>
    </ScrollView>
  );
};

export default observer(ItemList);
