import { Button, Icon } from "native-base";
import React from "react";
import { Text } from "react-native";
import UpdateAddress from "./UpdateAddress";

const updateAddressButton = ({ navigation, address }) => {
  return (
    <Icon
      onPress={() => navigation.navigate("UpdateAddress", { address: address })}
      name="edit"
      type="FontAwesome"
      style={{
        color: "gray",
        // marginRight: 10,
        justifyContent: "center",
        fontSize: 26,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.4,
        // shadowRadius: 5,
        // elevation: 5,
      }}
    />
  );
};

export default updateAddressButton;
