import React from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListItem, Left, Right, Button, Text, Body } from "native-base";
import ip from "../../stores/ipaddress";
import authStore from "../../stores/authStore";
import { ImageBackground } from "react-native";
const SingleItem = ({ item, navigation }) => {
  const handelPress = () => {
    if (authStore.user.id === 0) navigation.replace("Signin");
    else navigation.navigate("Request", { item: item });
  };

  return (
    <ListItem>
      <Left>
        <TouchableOpacity
          onPress={() => navigation.navigate("ItemDetail", { item: item })}
        >
          {!item.booked ? (
            <Image
              style={{ width: 150, height: 150 }}
              //source={{ uri: item.image }}
              source={{ uri: item.image }}
            />
          ) : (
            <ImageBackground
              source={{ uri: item.image }}
              style={{
                height: 150,
                width: 150,
                position: "relative",
                top: 2,
                left: 2,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "red",
                  position: "absolute",
                  bottom: 50, // position where you want
                  left: 20,
                }}
              >
                Booked!
              </Text>
            </ImageBackground>
          )}
        </TouchableOpacity>
      </Left>
      <Body>
        <Text>{item.name}</Text>
      </Body>

      <Right>
        <Button onPress={handelPress} style={{ width: 90, height: 50 }}>
          <Text>Request</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(SingleItem);
