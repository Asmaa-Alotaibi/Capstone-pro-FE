import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import UpdateAddress from "./UpdateAddress";

const updateAddressButton = ({ navigation, address }) => {
  return (
    <Button
      onPress={() => navigation.navigate("UpdateAddress", { address: address })}
    >
      <Text>Update</Text>
    </Button>
  );
};

export default updateAddressButton;
