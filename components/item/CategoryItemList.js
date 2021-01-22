import React, { useState } from "react";
import { observer } from "mobx-react";
import Item from "./Item";
import { Content, List } from "native-base";
import itemStore from "../../stores/itemStore";
import SearchBarr from "../SearchBarr";
import { StyleSheet, ScrollView, View } from "react-native";

const CategoryItemList = ({ navigation, route }) => {
  const [query, setQuery] = useState("");

  const itemList = itemStore.items
    .filter(
      (e) =>
        e.category === route.params.category &&
        e.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((item) => <Item item={item} key={item.id} navigation={navigation} />);
  return (
    <>
      <SearchBarr setQuery={setQuery} query={query} />
      <ScrollView>
        <View style={styles.container}>{itemList}</View>
      </ScrollView>
    </>
  );
};

export default observer(CategoryItemList);
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
