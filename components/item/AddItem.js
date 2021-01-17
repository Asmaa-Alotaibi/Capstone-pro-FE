import * as ImagePicker from "expo-image-picker";

import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
} from "native-base";
import { Image, ImageBackground, Platform, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import itemStore from "../../stores/itemStore";
import { observer } from "mobx-react";

const AddItem = ({ navigation }) => {
  const [item, setItem] = useState({
    image:
      "https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty-300x240.jpg",

    name: "",
    description: "",
    category: "",
  });
  const handleSubmit = async () => {
    await itemStore.createItem(item);
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
                <ImageBackground
                  source={{
                    uri:
                      "https://www.namepros.com/attachments/empty-png.89209/",
                  }}
                  style={{ width: "100%", height: 300 }}
                >
                  {item.image && (
                    <Image
                      source={{ uri: item.image.uri }}
                      style={{ width: "100%", height: 300, marginLeft: -9 }}
                    />
                  )}
                </ImageBackground>
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
            <Item floatingLabel last>
              <Label>Category</Label>
              <Input
                value={item.category}
                onChangeText={(category) => setItem({ ...item, category })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Category</Label>
              <Input
                value={item.category}
                onChangeText={(category) => setItem({ ...item, category })}
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

export default observer(AddItem);

// radio button old addresses drop downlist vs create new address //
// check item.addressid
