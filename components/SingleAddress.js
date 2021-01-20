import { Text, View } from "react-native";

import DeleteAddress from "./address/DeleteAddress";
import React from "react";
import UpdateAddressButton from "./address/UpdateAddressButton";
import { observer } from "mobx-react";

const SingleAddress = ({ address, navigation }) => {
  return (
    <>
      <View>
        <Text> City :{address.city}</Text>
        <Text> Block :{address.block}</Text>
        <Text> Street :{address.block}</Text>
        <Text> Avenue :{address.avenue}</Text>
        <Text> House :{address.house}</Text>
        <Text> Flat :{address.flat}</Text>
      </View>

      <DeleteAddress addressId={address.id} navigation={navigation} />
      <UpdateAddressButton address={address} navigation={navigation} />
    </>
  );
};

export default observer(SingleAddress);
