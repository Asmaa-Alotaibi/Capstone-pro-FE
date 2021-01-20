import * as ImagePicker from "expo-image-picker";
import { Image, ImageBackground, Platform, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import itemStore from "../../stores/itemStore";
import { observer } from "mobx-react";
import { showMessage } from "react-native-flash-message";
import DropDownCatList from "./DropDownCatList";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import authStore from "../../stores/authStore";
import addressStore from "../../stores/addressStore";
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  View,
} from "native-base";

const AddItem = ({ navigation }) => {
  const [item, setItem] = useState({
    image:
      "https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty-300x240.jpg",

    name: "",
    description: "",
    category: "",
  });
  // code for address selection
  const [addressSelected, setaddressSelected] = useState("");
  const UserAddresses = addressStore.addresses.filter(
    (address) => address.profileId === authStore.user.id
  );
  const data = new Array();
  data.push({
    id: 0,
    label: "Other address",
  });
  for (var i = 1; i < UserAddresses.length; i++) {
    data.push({
      id: UserAddresses[i].id,
      label: UserAddresses[i].city
        .concat(" blk ")
        .concat(UserAddresses[i].block)
        .concat(" st ")
        .concat(UserAddresses[i].street),
    });
  }
  //end
  const handleSubmit = async () => {
    if (addressSelected.id === 0) {
      navigation.navigate("AddAddress", { fromaddItem: "true" });
      await itemStore.createItem(
        { ...item, addressId: addressStore.addresses.length },
        addressStore.addresses.length
      );
    } else {
      await itemStore.createItem(
        { ...item, addressId: addressSelected.id },
        addressSelected.id
      );
      showMessage({
        message: "Item Has been added",
        description: `You have Added an New Item Succesfully`,
        type: "default",
        backgroundColor: "ff6b6b", // background color
        color: "black",
      });
      navigation.navigate("NewItemList");
    }
  };

  const imageSize = (image) => {
    console.log(image);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setItem({ ...item, image: { uri: localUri, name: filename, type } });
    }
  };

  return (
    <>
      <Container>
        <Content>
          <Form>
            <TouchableOpacity onPress={pickImage}>
              <Item>
                {item.image && (
                  <Image
                    source={
                      item.image.uri
                        ? { uri: item.image.uri }
                        : { uri: item.image }
                    }
                    style={{ width: "100%", height: 300, marginLeft: -9 }}
                  />
                )}
              </Item>
              <Text note style={{ fontSize: 17, textAlign: "center" }}>
                Add Your Picture
              </Text>
            </TouchableOpacity>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                value={item.name}
                onChangeText={(name) => setItem({ ...item, name })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input
                value={item.description}
                onChangeText={(description) =>
                  setItem({ ...item, description })
                }
              />
            </Item>
            <DropDownCatList
              category={item.category}
              onChangeText={(category) =>
                setItem({ ...item, category: category.value })
              }
            />
          </Form>

          <Button
            style={{
              zIndex: -50,
              marginLeft: 160,
              marginTop: 50,
              width: 100,
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
            <Text style={{ color: "white" }}>Add</Text>
          </Button>


          <View style={{ zIndex: -50 }}>

            <RadioButtonRN
              data={data}
              selectedBtn={(option) => setaddressSelected(option)}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>
        </Content>
      </Container>
    </>
  );
};

export default observer(AddItem);
