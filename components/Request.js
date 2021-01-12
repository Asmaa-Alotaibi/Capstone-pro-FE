import { Button, Content, Image, Left } from "native-base";
import React, { useState } from "react";
import { observer } from "mobx-react";
import ip from "../stores/ipaddress";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import authStore from "../stores/authStore";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Request = ({ navigation, route }) => {
  const [deliveryOption, setdeliveryOption] = useState(" ");
  const [newAdderss, setnewAdderss] = useState({
    city: "",
    block: "",
    avenue: "",
    street: "",
    house: "",
    flat: "",
  });

  const radiogroup_options = [
    { id: 0, label: "I will pick it up" },
    { id: 1, label: "I need Dileviry" },
  ];

  const { item } = route.params;
  console.log("from request>>", item);
  const handelSubmit = () => {
    // if (!authStore.user) navigation.replace("Signin");
    if (deliveryOption.id === 0)
      Alert.alert("Done", "Your order has been submited !");
    else navigation.navigate("DriversList", { item: item });
  };
  return (
    <Content>
      <View>
        <Text>ReUse</Text>
        <Left>
          {/* <Image   
            style={{ width: 100, height: 100 }}
            source={{ uri: item.image.replace("localhost", ip) }}
          /> */}
        </Left>
        <Text>You are ordering : {item.name}</Text>
        <Text>Description : {item.description}</Text>

        <Text>owner of this item is : {item.owner.username}</Text>

        <Text>Delivery Options:</Text>
        <RadioButtonRN
          data={radiogroup_options}
          //selectedBtn={(e) => console.log(e)}
          selectedBtn={(option) =>
            setdeliveryOption({ deliveryOption: option })
          }
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

const styles = StyleSheet.create({
  dropdownview: {
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  cities: {
    height: 60,
    width: 350,
    paddingVertical: 10,
  },
});
