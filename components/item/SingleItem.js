import { ListItem, Left, Right, Button, Text, Body } from "native-base";
import React from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";

const SingleItem = ({ item, navigation }) => {
  const handleAdd = {};
  return (
    <ListItem>
      <TouchableOpacity
        onPress={() => navigation.navigate("ItemDetail", { item: item })}
      >
        <Left>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.image.replace("localhost", "192.168.1.152") }}
          />
        </Left>
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Right>
          <Button onPress={handleAdd} style={{ width: 80, height: 30 }}>
            <Text style={{ fontSize: 10 }}>Request</Text>
          </Button>
        </Right>
      </TouchableOpacity>
    </ListItem>
  );
};

export default observer(SingleItem);
