import { Button, Content, Left } from "native-base";
import React, { useState } from "react";
import { observer } from "mobx-react";
import ip from "../stores/ipaddress";
import authStore from "../stores/authStore";
import itemStore from "../stores/itemStore";

import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image, Alert, Text, View } from "react-native";

const Request = ({ navigation, route }) => {
  const [deliveryOption, setdeliveryOption] = useState("");

  const radiogroup_options = [
    { id: 0, label: "I will pick it up" },
    { id: 1, label: "I need Deleviry" },
  ];

  const { item } = route.params;

  console.log("from request>>", item);
  const handelSubmit = () => {
    //if (!authStore.user) navigation.replace("Signin");
    //notify owner (push notification)
    //generate QR
    if (deliveryOption.id === 0) {
      itemStore.requestItem(item, 0);
      Alert.alert("Done", "Your order has been submited !");
      navigation.navigate("RequestSummary", {
        item: item,
        option: 0,
      });
    } else {
      //change stause of needdelivery (item )
      itemStore.requestItem(item, 1);
      Alert.alert(
        "Done",
        "Item is booked and your Delivery request in process !"
      );
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
        <Text> Address of this item is : {item.addressId.city}</Text>
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
