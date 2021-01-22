import { Button, Content, Left, Right } from "native-base";
import React, { useState } from "react";
import { observer } from "mobx-react";
import ip from "../stores/ipaddress";
import authStore from "../stores/authStore";
import itemStore from "../stores/itemStore";

import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image, StyleSheet, Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";

const Request = ({ navigation, route }) => {
  const [deliveryOption, setdeliveryOption] = useState("");

  const radiogroup_options = [
    { id: 0, label: "I will pick it up" },
    { id: 1, label: "I need Delivery" },
  ];

  const { item } = route.params;

  const handelSubmit = () => {
    //notify owner (push notification)
    if (deliveryOption.id === 0) {
      itemStore.requestItem({ ...item, recipientId: authStore.user.id }, 0);
      showMessage({
        message: "Done, Thanks",
        description: `Your order has been submited !`,
        type: "default",
        backgroundColor: "#009387", // background color
        color: "black",
      });
      navigation.navigate("RequestSummary", {
        item: item,
        option: 0,
      });
    } else {
      //change stauts of needdelivery (item )
      itemStore.requestItem({ ...item, recipientId: authStore.user.id }, 1);

      showMessage({
        message: "Done, Thanks",
        description: `Item is booked and your Delivery request in process !`,
        type: "default",
        backgroundColor: "#009387",
        color: "black",
      });
      navigation.navigate("RequestSummary", {
        item: item,
        option: 1,
      });
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
            source={{ uri: item.image }}
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
          <Text style={{ color: "black" }}>{item.description}</Text>{" "}
        </Text>
      </View>
      {/* <Text> Address of this item is : {item.addressId.city}</Text> */}
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 17 }}>Delivery Options:</Text>
        <RadioButtonRN
          activeColor={"#009387"}
          data={radiogroup_options}
          selectedBtn={(option) => setdeliveryOption(option)}
          icon={<Icon name="check-circle" size={25} color="#009387" />}
        />
        <Button
          onPress={handelSubmit}
          style={{
            marginTop: 20,
            marginLeft: 140,
            width: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#009387",
            backgroundColor: "#009387",
            justifyContent: "center",
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
          <Text style={{ fontSize: 15, color: "white" }}>Submit</Text>
        </Button>
      </View>
    </View>
  );
};

export default observer(Request);
// { ...item, QRvalue: randomValue }
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
