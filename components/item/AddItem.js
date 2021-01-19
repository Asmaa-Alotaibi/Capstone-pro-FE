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
  const [addressOption, setaddressOption] = useState("");
  const radiogroup_options = [
    { id: 0, label: "Existing address" },
    { id: 1, label: "New address" },
  ];

  const handleSubmit = async () => {
    await itemStore.createItem(item);
    showMessage({
      message: "Item Has been added",
      description: `You have Added an New Item Succesfully`,
      type: "default",
      backgroundColor: "black", // background color
      color: "#fff",
    });
    navigation.navigate("NewItemList");
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

    console.log(result);

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
                Edit Your Picture
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

          <View>
            {/* <RadioButtonRN
              data={radiogroup_options}
              selectedBtn={(option) => setaddressOption(option)}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            /> */}
            {/* {addressOption === 0 ?
          (<DropDownaddressList>) :()
             } */}
          </View>
        </Content>
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
      </Container>
    </>
  );
};

export default observer(AddItem);

// radio button old addresses drop downlist vs create new address //
// check item.addressid
