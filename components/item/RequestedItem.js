import React from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListItem, Left, Right, Button, Text, Body } from "native-base";
import ip from "../../stores/ipaddress";
import authStore from "../../stores/authStore";
import itemStore from "../../stores/itemStore";

const RequestedItem = ({ item }) => {
  const handleDriver = () => {
    const updatedItem =
      authStore.user.id !== item.driverId
        ? { ...item, driverId: authStore.user.id }
        : { ...item, driverId: null };
    itemStore.driver(updatedItem);
  };
  return (
    <>
      <ListItem style={{ width: "100%" }}>
        <Left>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.image }}
            // source={{ uri: item.image.replace("localhost", ip) }}
          />
          <Body>
            <Text>Need To be Delivered To </Text>
            <Text>
              {item.adress ? (
                item.address.city
              ) : (
                <Text style={{ color: "red" }}>Adrees Not Available</Text>
              )}
            </Text>
          </Body>
        </Left>
        <Right>
          {item.gone ? (
            <Button
              style={{ backgroundColor: "gray", width: 100, marginRight: 5 }}
            >
              <Text>Delivered</Text>
            </Button>
          ) : item.driverId === null ? (
            <Button onPress={handleDriver} style={{ marginRight: 5 }}>
              <Text>Deliver</Text>
            </Button>
          ) : authStore.user.id === item.driverId ? (
            <Button
              onPress={handleDriver}
              style={{ backgroundColor: "red", marginRight: 3 }}
            >
              <Text>Cancel</Text>
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "gray", width: 100, marginRight: 5 }}
            >
              <Text>Delivered</Text>
            </Button>
          )}
        </Right>
      </ListItem>
    </>
  );
};

export default observer(RequestedItem);
