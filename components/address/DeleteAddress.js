import { Icon } from "native-base";
import React from "react";
import addressStore from "../../stores/addressStore";

const DeleteAddress = ({ addressId, navigation }) => {
  const handleDelete = () => {
    addressStore.deleteAddress(addressId);
    navigation.navigate("AddressList");
  };

  return <Icon onPress={handleDelete} name="trash" color="red" />;
};

export default DeleteAddress;
