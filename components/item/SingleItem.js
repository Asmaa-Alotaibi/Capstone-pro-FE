import React from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListItem, Left, Right, Button, Text, Body } from "native-base";
import ip from "../../stores/ipaddress";

const SingleItem = ({ item, navigation }) => {
  return (
    <ListItem>
      <Left>
        <TouchableOpacity
          onPress={() => navigation.navigate("ItemDetail", { item: item })}
        >
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: item.image }}
            // source={{ uri: item.image.replace("localhost", ip) }}
          />
        </TouchableOpacity>
      </Left>
      <Body>
        <Text>{item.name}</Text>
      </Body>

      <Right>
        <Button
          onPress={() => navigation.navigate("Request", { item: item })}
          style={{ width: 90, height: 50 }}
        >
          <Text>Request</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(SingleItem);
