import { Button, Content, Left } from "native-base";
import React, { useState } from "react";
import { observer } from "mobx-react";
import ip from "../stores/ipaddress";
import authStore from "../stores/authStore";
import itemStore from "../stores/itemStore";

import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image, Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";

const Request = ({ navigation, route }) => {
  const [deliveryOption, setdeliveryOption] = useState("");

  const radiogroup_options = [
    { id: 0, label: "I will pick it up" },
    { id: 1, label: "I need Delivery" },
  ];

  const { item } = route.params;
  console.log("from request>>", item);

  const handelSubmit = () => {
    //if (!authStore.user) navigation.replace("Signin");
    //notify owner (push notification)

    // const randomValue =
    //   Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2); //random string

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
    <Content>
      <View>
        <Text>ReUse</Text>
        <Left>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.image.replace("localhost", ip) }}
          />
        </Left>
        <Text>You are ordering : {item.name}</Text>
        <Text>Description : {item.description}</Text>
        <Text>owner of this item is : {item.owner.username}</Text>
        {/* <Text> Address of this item is : {item.addressId.city}</Text> */}
        <Text>Delivery Options:</Text>
        <RadioButtonRN
          data={radiogroup_options}
          selectedBtn={(option) => setdeliveryOption(option)}
          icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
        />
        <Button onPress={handelSubmit} style={{ width: 80, height: 30 }}>
          <Text style={{ fontSize: 15 }}>Submit</Text>
        </Button>
      </View>
    </Content>
  );
};

export default observer(Request);
// { ...item, QRvalue: randomValue }
