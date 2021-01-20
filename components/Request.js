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
        backgroundColor: "black", // background color
        color: "#fff",
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
        backgroundColor: "black",
        color: "#fff",
      });
      navigation.navigate("RequestSummary", {
        item: item,
        option: 1,
      });
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={(styles.text, { margin: 10, fontSize: 20 })}>
        You Request:
      </Text>
      <View style={{ flexDirection: "row", margin: 20 }}>
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: item.image.replace("localhost", ip) }}
        />
        <View style={{ margin: 20 }}>
          <Text style={styles.text}>Product : {item.name}</Text>
          <Text style={styles.text}>Owner : {item.owner.username}</Text>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.text}>Description : {item.description}</Text>
      </View>
      {/* <Text> Address of this item is : {item.addressId.city}</Text> */}
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20 }}>Delivery Options:</Text>
        <RadioButtonRN
          activeColor={"#009387"}
          data={radiogroup_options}
          selectedBtn={(option) => setdeliveryOption(option)}
          icon={<Icon name="check-circle" size={25} color="#009387" />}
        />
        <Button
          onPress={handelSubmit}
          style={{
            margin: 20,
            width: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#009387",
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
    fontSize: 20,
  },
});
