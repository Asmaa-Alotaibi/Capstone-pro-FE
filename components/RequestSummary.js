import React from "react";
import { Image, Alert, Text, View } from "react-native";
import { Header, Content, Left, Body, Title, Right } from "native-base";
import ip from "../stores/ipaddress";
import SingleAdress from "./SingleAdress";
import call from "react-native-phone-call";
import { Icon } from "native-base";
import authStore from "../stores/authStore";

const RequestSummary = ({ navigation, route }) => {
  const address = route.params.address;
  const item = route.params.item;
  const owner = authStore.getUserBYId(item.ownerId);

  const handelPress = () => {
    const args = {
      number: JSON.stringify(owner.phone), // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  };
  const showAddress = () => {
    if (address)
      return (
        <>
          <Text> Address of this item is: </Text>
          <SingleAdress address={address} />
          <Text> call {item.owner.username}: </Text>
          <Icon
            onPress={handelPress}
            name="phone"
            type="Feather"
            style={{ marginLeft: 50, color: "green" }}
          />
        </>
      );
    else {
      return (
        <Text>You will be notified soon about delivery confirmation. </Text>
      );
    }
  };
  return (
    <Content>
      <Header>
        <Left />
        <Body>
          <Title>Your Request</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image.replace("localhost", ip) }}
        />
        <Text> item name: {item.name}</Text>
        <Text> Description : {item.description}</Text>
        <Text> owner of this item is : {item.owner.username}</Text>
        {showAddress()}
      </Content>
    </Content>
  );
};

export default RequestSummary;
//<Text> Address of this item is: </Text>
