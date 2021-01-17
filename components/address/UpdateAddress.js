import * as ImagePicker from "expo-image-picker";

import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text,
  Thumbnail,
} from "native-base";
import { Image, ImageBackground, Platform } from "react-native";
import React, { useEffect, useState } from "react";

import DropDownList from "./DropDownList";
import { TouchableOpacity } from "react-native-gesture-handler";
import addressStore from "../../stores/addressStore";
import { observer } from "mobx-react";

const UpdateAddress = ({ route, navigation }) => {
  const { address } = route.params;
  const [updatedAddress, setUpdatedAddress] = useState(address);

  const handleSubmit = async () => {
    await addressStore.updateAddress(updatedAddress);
    navigation.pop();
  };

  return (
    <Container>
      <Content>
        <Form>
          <DropDownList
            city={updatedAddress.city}
            onChangeText={(city) =>
              setUpdatedAddress({ ...updatedAddress, city: city.value })
            }
          />

          <Item floatingLabel last>
            <Label>Block</Label>
            <Input
              value={updatedAddress.block}
              onChangeText={(block) =>
                setUpdatedAddress({ ...updatedAddress, block })
              }
            />
          </Item>

          <Item floatingLabel last>
            <Label>Avenue</Label>
            <Input
              value={updatedAddress.avenue}
              onChangeText={(avenue) =>
                setUpdatedAddress({ ...updatedAddress, avenue })
              }
            />
          </Item>

          <Item floatingLabel last>
            <Label>Street</Label>
            <Input
              value={updatedAddress.street}
              onChangeText={(street) =>
                setUpdatedAddress({ ...updatedAddress, street })
              }
            />
          </Item>

          <Item floatingLabel last>
            <Label>House</Label>
            <Input
              value={updatedAddress.house}
              onChangeText={(house) =>
                setUpdatedAddress({ ...updatedAddress, house })
              }
            />
          </Item>

          <Item floatingLabel last>
            <Label>Flat</Label>
            <Input
              value={updatedAddress.flat}
              onChangeText={(flat) =>
                setUpdatedAddress({ ...updatedAddress, flat })
              }
            />
          </Item>
        </Form>
        <Button
          bordered
          dark
          style={{ marginLeft: 190, marginTop: 50 }}
          onPress={handleSubmit}
        >
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>
  );
};
export default observer(UpdateAddress);
