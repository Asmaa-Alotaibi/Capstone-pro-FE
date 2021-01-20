import React from "react";
import { observer } from "mobx-react";
import SingleItem from "./SingleItem";
import { Content, List, Spinner } from "native-base";
import itemStore from "../../stores/itemStore";
import QRScanner from "../QRScanner";
import Item from "./Item";
import { ScrollView, StyleSheet, View } from "react-native";

const NewItemList = ({ navigation }) => {
  if (itemStore.loading) return <Spinner />;
  let d = new Date() - 259200000; //date before 3 days  -259200000 , before 1 day -86400000
  const newitemList = itemStore.items
    .filter((e) => Date.parse(e.createdAt) > d)
    .map((e) => <Item item={e} key={e.id} navigation={navigation} />);
  //
  return (
    <ScrollView>
      <View style={styles.container}>{newitemList}</View>
    </ScrollView>
  );
};

export default observer(NewItemList);
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
