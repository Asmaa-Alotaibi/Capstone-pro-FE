import React, { useState } from "react";
import { observer } from "mobx-react";
import { Content, List, Text } from "native-base";
const DriversList = ({ navigation, route }) => {
  const [newAdderss, setnewAdderss] = useState({
    city: "",
    block: "",
    avenue: "",
    street: "",
    house: "",
    flat: "",
  });

  const item = route.params.item;

  return (
    <Content>
      <Text>Your current addrerss</Text>
      <Text>Your current addrerss</Text>
      <Text>city : {address.city}</Text>
      <Text>block : {address.block}</Text>
      <Text>avenue : {address.avenue}</Text>
      <Text>street : {address.street}</Text>
      <Text>house : {address.house}</Text>
      <Text>flat : {address.flat}</Text>
      <Text>Deliver to another Adress ? </Text>

      <List>{DriverList}</List>
    </Content>
  );
};

export default observer(DriversList);
