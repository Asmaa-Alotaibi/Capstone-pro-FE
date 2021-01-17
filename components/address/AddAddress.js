import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
} from "native-base";
import { Platform, Text } from "react-native";
import React, { useEffect, useState } from "react";

import DropDownList from "./DropDownList";
import { TouchableOpacity } from "react-native-gesture-handler";
import addressStore from "../../stores/addressStore";
import { observer } from "mobx-react";

const AddAddress = ({ navigation }) => {
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
            bordered
            dark
            style={{
              marginLeft: 190,
              marginTop: 50,
              width: 100,
              justifyContent: "center",
            }}
            onPress={handleSubmit}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default observer(AddAddress);

// radio button old addresses drop downlist vs create new address //
