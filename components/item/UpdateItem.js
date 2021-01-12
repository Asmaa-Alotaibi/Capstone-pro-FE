import { observer } from "mobx-react";
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
import itemStore from "../../stores/itemStore";
import React, { useState, useEffect } from "react";
import { Image, Platform, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const UpdateItem = ({ route, navigation }) => {
  const { item } = route.params;
  const [updatedItem, setUpdatedItem] = useState(item);

  const handleSubmit = async () => {
    await itemStore.updateItem(updatedItem);
    navigation.navigate("NewItemList");
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

      setUpdatedItem({
        ...updatedItem,
        image: { uri: localUri, name: filename, type },
      });
    }
  };
  return (
    <Container>
      <Content>
        <Form>
          <TouchableOpacity onPress={pickImage}>
            <Item style={{ alignContent: "center", justifyContent: "center" }}>
              <ImageBackground
                source={{
                  uri: "https://www.namepros.com/attachments/empty-png.89209/",
                }}
                style={{ width: "100%", height: 300 }}
              >
                {updatedItem.image.uri ? (
                  <Image
                    source={{ uri: updatedItem.image.uri }}
                    style={{ width: "100%", height: 300, marginLeft: -14 }}
                  />
                ) : (
                  <Image
                    source={{ uri: updatedItem.image }}
                    style={{ width: "100%", height: 300, marginLeft: -14 }}
                  />
                )}
              </ImageBackground>
            </Item>
            <Text
              note
              style={{ fontSize: 17, textAlign: "center", marginTop: 5 }}
            >
              {" "}
              Edit Your Picture
            </Text>
          </TouchableOpacity>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              value={updatedItem.name}
              onChangeText={(name) => setUpdatedItem({ ...updatedItem, name })}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Description</Label>
            <Input
              value={updatedItem.description}
              onChangeText={(description) =>
                setUpdatedItem({ ...updatedItem, description })
              }
            />
          </Item>
          <Item floatingLabel last>
            <Label>Category</Label>
            <Input
              value={updatedItem.category}
              onChangeText={(category) =>
                setUpdatedItem({ ...updatedItem, category })
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
export default observer(UpdateItem);
