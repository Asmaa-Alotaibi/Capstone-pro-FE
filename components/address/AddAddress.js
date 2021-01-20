import { Text } from "react-native";
import React, { useState } from "react";
import DropDownList from "./DropDownList";
import addressStore from "../../stores/addressStore";
import { observer } from "mobx-react";
import { showMessage } from "react-native-flash-message";
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
} from "native-base";

const AddAddress = ({ navigation, route }) => {
  const [address, setAddress] = useState({
    city: "",
    block: "",
    avenue: "",
    street: "",
    house: "",
    flat: "",
  });

  const handleSubmit = async () => {
    await addressStore.createAddress(address);
    if (route.params.fromaddItem)
      showMessage({
        message: "Item Has been added",
        description: `You have Added an New Item Succesfully`,
        type: "default",
        backgroundColor: "black", // background color
        color: "#fff",
      });
    else {
      showMessage({
        message: "Address Has been added",
        description: `You have Added an New Address Succesfully`,
        type: "default",
        backgroundColor: "black", // background color
        color: "#fff",
      });
    }
    navigation.pop();
  };

  return (
    <>
      <Container>
        <Content>
          <Form>
            <DropDownList
              city={address.city}
              onChangeText={(city) =>
                setAddress({ ...address, city: city.value })
              }
            />

            <Item floatingLabel last>
              <Label>Block</Label>
              <Input
                value={address.block}
                onChangeText={(block) => setAddress({ ...address, block })}
              />
            </Item>

            <Item floatingLabel last>
              <Label>Avenue</Label>
              <Input
                value={address.avenue}
                onChangeText={(avenue) => setAddress({ ...address, avenue })}
              />
            </Item>

            <Item floatingLabel last>
              <Label>Street</Label>
              <Input
                value={address.street}
                onChangeText={(street) => setAddress({ ...address, street })}
              />
            </Item>

            <Item floatingLabel last>
              <Label>House</Label>
              <Input
                value={address.house}
                onChangeText={(house) => setAddress({ ...address, house })}
              />
            </Item>

            <Item floatingLabel last>
              <Label>Flat</Label>
              <Input
                value={address.flat}
                onChangeText={(flat) => setAddress({ ...address, flat })}
              />
            </Item>
          </Form>
          <Button
            style={{
              marginLeft: 160,
              marginTop: 50,
              width: 100,
              backgroundColor: "#009387",
              justifyContent: "center",
              backgroundColor: "#009387",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8,
              shadowRadius: 5,
              elevation: 5,
            }}
            onPress={handleSubmit}
          >
            <Text>Add</Text>
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default observer(AddAddress);
