import { Icon } from "native-base";
import React from "react";
import addressStore from "../../stores/addressStore";

const DeleteAddress = ({ addressId, navigation }) => {
  const handleDelete = () => {
    addressStore.deleteAddress(addressId);
    navigation.navigate("AddressList");
  };

  return (
    <Icon
      onPress={handleDelete}
      name="trash"
      color="red"
      style={{
        justifyContent: "center",
        fontSize: 26,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
        // elevation: 5,
      }}
    />
  );
};

export default DeleteAddress;
