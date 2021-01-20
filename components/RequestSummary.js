import React from "react";
import { Image, Alert, Text, View, StyleSheet } from "react-native";
import { Header, Content, Left, Body, Title, Right, Button } from "native-base";
import ip from "../stores/ipaddress";
import SingleAdress from "./SingleAdress";
import call from "react-native-phone-call";
import { Icon } from "native-base";
import addressStore from "../stores/addressStore";
import QRgenerator from "./QRgenerator";
import { observer } from "mobx-react";

const RequestSummary = ({ route }) => {
  const option = route.params.option;
  const item = route.params.item;
  console.log("TCL: RequestSummary -> item", item);

  const handelPress = () => {
    const args = {
      number: JSON.stringify(item.owner.phone),
      prompt: false, // Optional to determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  };
  const showAddress = () => {
    const address = addressStore.getAddressById(item.addressId);
    if (option === 0)
      return (
        <>
          <Text style={styles.text}>
            Adress :{" "}
            <Text style={{ color: "black" }}>
              {/* <SingleAdress address={address} /> */}
            </Text>
          </Text>
        </>
      );
    else {
      return (
        <Text style={styles.notif}>
          You will be notified soon about delivery confirmation.{" "}
        </Text>
      );
    }
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
            source={{ uri: item.image.replace("localhost", ip) }}
          />
        </View>
        <View style={{ marginTop: 55, marginLeft: 30 }}>
          <Text style={styles.text}>
            Product : <Text style={{ color: "black" }}>{item.name}</Text>{" "}
          </Text>
          <Text style={styles.note}>Owner : {item.owner.username}</Text>
        </View>
      </View>
      <View style={{ marginTop: 10, marginLeft: 30 }}>
        <Text style={styles.text}>
          Description :{" "}
          <Text style={{ color: "black" }}>{item.description}</Text>
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
  );
};

export default observer(RequestSummary);
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: "gray",
  },
  note: {
    fontSize: 15,
    color: "gray",
  },
  notif: {
    fontSize: 17,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    marginLeft: -15,
    color: "black",
    fontWeight: "bold",
  },
});
