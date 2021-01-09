import React, { useState } from "react";
import { observer } from "mobx-react";
import SingleItem from "./SingleItem";
import { Content, List } from "native-base";
import itemStore from "../../stores/itemStore";
import SearchBarr from "../SearchBarr";

const CategoryItemList = ({ navigation, route }) => {
  const [query, setQuery] = useState("");

  const itemList = itemStore.items
    .filter(
      (e) =>
        e.category === route.params.category &&
        e.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((item) => (
      <SingleItem item={item} key={item.id} navigation={navigation} />
    ));
  return (
    <Content>
      <SearchBarr setQuery={setQuery} query={query} />
      <List>{itemList}</List>
    </Content>
  );
};

export default observer(CategoryItemList);
