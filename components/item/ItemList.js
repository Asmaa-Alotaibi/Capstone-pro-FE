import { Container, Spinner } from "native-base";
import React from "react";
import Item from "./Item";
import itemStore from "../../stores/itemStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { Containerr } from "../../styles";
import { ScrollView, StyleSheet, View } from "react-native";

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
      <View style={styles.container}>{itemList}</View>
    </ScrollView>
  );
};

export default observer(ItemList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
