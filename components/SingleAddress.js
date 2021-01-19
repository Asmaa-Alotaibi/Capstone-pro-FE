import { Text, View } from "react-native";

import DeleteAddress from "./address/DeleteAddress";
import React from "react";
import UpdateAddressButton from "./address/UpdateAddressButton";

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
      <View>
        <DeleteAddress addressId={address.id} navigation={navigation} />
        <UpdateAddressButton address={address} navigation={navigation} />
      </View>
    </>
  );
};

export default SingleAddress;
