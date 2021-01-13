import React from "react";
import { View, Text } from "react-native";

const SingleAdress = ({ address }) => {
  return (
    <View>
      <Text> City :{address.city}</Text>
      <Text> Block :{address.block}</Text>
      <Text> Avenue :{address.avenue}</Text>
      <Text> House :{address.house}</Text>
      <Text> Flat :{address.flat}</Text>
    </View>
  );
};

export default SingleAdress;
