import React from "react";
import { observer } from "mobx-react";
import SingleItem from "./SingleItem";
import { Content, List } from "native-base";
import itemStore from "../../stores/itemStore";
import { RotationGestureHandler } from "react-native-gesture-handler";

const CategoryItemList = ({ navigation, route }) => {
  const itemList = itemStore.items
    .filter((e) => e.category === route.params.category)
    .map((item) => (
      <SingleItem item={item} key={item.id} navigation={navigation} />
    ));
  return (
    <Content>
      <List>{itemList}</List>
    </Content>
  );
};

export default observer(CategoryItemList);
