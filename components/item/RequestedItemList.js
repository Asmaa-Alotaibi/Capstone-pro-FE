import React from "react";
import { observer } from "mobx-react";
import SingleItem from "./SingleItem";
import { Content, List, Spinner, View } from "native-base";
import itemStore from "../../stores/itemStore";
import QRScanner from "../QRScanner";
import RequestedItem from "./RequestedItem";
import authStore from "../../stores/authStore";

const RequestedItemList = ({ navigation, items }) => {
  if (itemStore.loading) return <Spinner />;
  const itemList = items
    ? items.map((item) => (
        <RequestedItem item={item} key={item.id} navigation={navigation} />
      ))
    : itemStore.items
        .filter((item) => item.needDelivery & item.booked)
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
