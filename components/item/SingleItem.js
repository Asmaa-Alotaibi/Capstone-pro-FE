import React from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListItem, Left, Right, Button, Text, Body } from "native-base";
import ip from "../../stores/ipaddress";

const SingleItem = ({ item, navigation }) => {
  return (
    <ListItem>
      <TouchableOpacity
        onPress={() => navigation.navigate("ItemDetail", { item: item })}
      >
        <Left>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.image.replace("localhost", ip) }}
          />
        </Left>
        <Body>
          <Text>{item.name}</Text>
        </Body>
      </TouchableOpacity>
      <Right>
        <Button
          onPress={() => navigation.navigate("Request", { item: item })}
          style={{ width: 80, height: 30 }}
        >
          <Text style={{ fontSize: 10 }}>Request</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(SingleItem);
