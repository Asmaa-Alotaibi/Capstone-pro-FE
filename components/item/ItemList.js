import { Container, Spinner } from "native-base";
import React from "react";
import Item from "./Item";
import itemStore from "../../stores/itemStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { Containerr } from "../../styles";
import { ScrollView, StyleSheet, View } from "react-native";

const ItemList = ({ navigation, route }) => {
  const { items } = route.params;
  const _navigation = navigation ? navigation : route.params.navigation;
  if (!authStore.user) navigation.replace("Signin");
  if (itemStore.loading) return <Spinner />;
  const itemList = items
    ? items.map((item) => (
        <Item item={item} key={item.id} navigation={_navigation} />
      ))
    : itemStore.items.map((item) => (
        <Item item={item} key={item.id} navigation={_navigation} />
      ));

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>{itemList}</View>
    </ScrollView>
  );
};

export default observer(ItemList);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
