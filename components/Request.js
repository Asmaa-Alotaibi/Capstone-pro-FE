import { Button, Content, Left } from "native-base";
import React, { useState } from "react";
import { observer } from "mobx-react";
import ip from "../stores/ipaddress";
import authStore from "../stores/authStore";
import addressStore from "../stores/addressStore";
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
  //const owner = profileStore.getProfileByUserId(item.ownerId);
  const itemAddress = addressStore.getAddressById(item.addressId);

  console.log("from request>>", item);

  const handelSubmit = () => {
    console.log("from request>>", deliveryOption);
    // if (!authStore.user) navigation.replace("Signin");
    // request from BE
    if (deliveryOption.id === 0) {
      Alert.alert("Done", "Your order has been submited !");
      //notify owner (push notification)
      //generate QR
      navigation.navigate("RequestSummary", {
        item: item,
        address: itemAddress,
      });
      // change staus to booked item
    }
    // else  change stause of needdelivery (item )
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
        <Text> Address of this item is : {itemAddress.city}</Text>
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

//{  option===1 ?   <   >   :  <    >   }
