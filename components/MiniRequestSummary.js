import React from "react";
import { Image, Alert, Text, View } from "react-native";
import { Header, Content, Left, Body, Title, Right } from "native-base";
import ip from "../stores/ipaddress";
import SingleAdress from "./SingleAdress";
import call from "react-native-phone-call";
import { Icon } from "native-base";
import addressStore from "../stores/addressStore";
import QRgenerator from "./QRgenerator";

const MiniRequestSummary = ({ route }) => {
  const item = route.params.item;

  const handelPress = () => {
    const args = {
      number: JSON.stringify(item.owner.phone),
      prompt: false, // Optional to determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  };
  const showAddress = () => {
    const address = addressStore.getAddressById(item.addressId);
    if (!item.needDelivery)
      return (
        <>
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
        <QRgenerator RQValue={item.id} />
      </Content>
    </Content>
  );
};

export default MiniRequestSummary;
