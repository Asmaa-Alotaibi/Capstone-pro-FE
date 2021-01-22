import React from "react";
import { Image, Alert, Text, View, StyleSheet } from "react-native";
import ip from "../../stores/ipaddress";
import SingleAdress from "../SingleAdress";
import call from "react-native-phone-call";
import { Button, Icon } from "native-base";
import addressStore from "../../stores/addressStore";
import QRgenerator from "../QRgenerator";
import profileStore from "../../stores/profileStore";

const DriverSummary = ({ route }) => {
  const item = route.params.item;

  const recipient = profileStore.getProfileByUserId(item.recipientId);
  const handelPress = () => {
    const args = {
      number: JSON.stringify(recipient.user.phone),
      prompt: false, // Optional to determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  };
  const showAddress = () => {
    const address = addressStore.getAddressById(item.addressId);
    return (
      <>
        <Text style={styles.text}>
          Adress :{" "}
          <Text style={{ color: "black" }}>
            {address ? (
              <SingleAdress address={address} />
            ) : (
              <Text style={{ color: "tomato" }}>Adress Is Not Available</Text>
            )}
          </Text>
        </Text>
      </>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", margin: 20 }}>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Image
            style={{
              width: 150,
              height: 150,
            }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={{ marginTop: 55, marginLeft: 30 }}>
          <Text style={styles.text}>
            Product : <Text style={{ color: "black" }}>{item.name}</Text>{" "}
          </Text>
          <Text style={styles.note}>Owner : {item.owner.username}</Text>
          <Text style={styles.note}>Recipient : {recipient.user.username}</Text>
        </View>
      </View>
      <View style={{ marginTop: 10, marginLeft: 30 }}>
        <Text style={styles.text}>
          Description :{" "}
          <Text style={{ color: "black" }}>{item.description}</Text>{" "}
        </Text>
        {showAddress()}
      </View>
      <View style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: "#009387",
            width: 50,
            height: 50,
            borderRadius: 100,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Icon
            onPress={handelPress}
            name="phone"
            type="Feather"
            style={{ color: "white", fontSize: 20 }}
          />
        </Button>
      </View>
      <QRgenerator RQValue={item.id} />
    </View>

    /* <Content>
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
  </Content> */
  );
};

export default DriverSummary;
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: "gray",
  },
  note: {
    fontSize: 15,
    color: "gray",
  },
});
