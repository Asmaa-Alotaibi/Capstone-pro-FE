import React from "react";
import { observer } from "mobx-react";
import SingleItem from "./SingleItem";
import { Content, List, Spinner, View } from "native-base";
import itemStore from "../../stores/itemStore";
import QRScanner from "../QRScanner";
import RequestedItem from "./RequestedItem";
import authStore from "../../stores/authStore";

const RequestedItemList = ({ navigation }) => {
  if (itemStore.loading) return <Spinner />;
  const itemList = itemStore.items
    .filter((item) => item.needDelivery === true)

    .map((item) => (
      <RequestedItem item={item} key={item.id} navigation={navigation} />
    ));
  //
  return (
    <Content>
      <List>{itemList}</List>
    </Content>
  );
};

export default observer(RequestedItemList);
