import { Button, Icon, Text } from "native-base";
import React from "react";
const UpdateItemButton = ({ profile, navigation, item }) => {
  return (
    <Icon
      onPress={() => navigation.navigate("UpdateItem", { item: item })}
      name="edit"
      type="FontAwesome"
      style={{ padding: 5, marginRight: -15 }}
    />
  );
};

export default UpdateItemButton;
