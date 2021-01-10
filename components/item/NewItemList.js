import React from "react";
import { observer } from "mobx-react";
import SingleItem from "./SingleItem";
import { Content, List } from "native-base";
import itemStore from "../../stores/itemStore";

const NewItemList = () => {
  let d = new Date() - 259200000; //date before 3 days  -259200000 , before 1 day -86400000
  const newitemList = itemStore.items
    .filter((e) => Date.parse(e.createdAt) > d)
    .map((e) => <SingleItem item={e} key={e.id} />);

  // you left a comment here. Clean up everything before moving on.
  //
  return (
    <Content>
      <List>{newitemList}</List>
    </Content>
  );
};

export default observer(NewItemList);
