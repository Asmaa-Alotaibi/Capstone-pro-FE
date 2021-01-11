import React from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";
const DriversList = ({ navigation, route }) => {
  const item = route.params.item;
  const owner = getProfileByUserId(item.ownerId);
  const ownerAddress = getAddressByUserId(owner.id);

  return (
    <Content>
      <List>{DriverList}</List>
    </Content>
  );
};

export default observer(DriversList);
