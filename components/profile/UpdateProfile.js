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
} from "native-base";
import { Image, ImageBackground, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";
import profileImg from "../../img/profileImage.jpg";

import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";

const UpdateProfile = ({ route, navigation }) => {
  const { profile } = route.params;
  const [newProfile, setNewProfile] = useState(profile);
  console.log(newProfile);
  const handleSubmit = async () => {
    await profileStore.updateProfile(newProfile);
    {
      newProfile !== profile
        ? showMessage({
            message: "Profile Updated",
            description: `You have Updated your Profile Succesfully`,
            type: "default",
            backgroundColor: "black", // background color
            color: "#fff",
          })
        : null;
    }
    navigation.navigate("MyProfile");
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

      setNewProfile({
        ...newProfile,
        image: { uri: localUri, name: filename, type },
      });
    }
  };
  return (
    <Container>
      <Content>
        <Form>
          <Item
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={pickImage}>
              <Item
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={profileImg}
                  style={{
                    width: 150,
                    height: 150,
                    marginLeft: -10,
                    borderRadius: 50,
                  }}
                >
                  {newProfile.image && (
                    <Image
                      // source={{ uri: newProfile.image }}
                      // style={{ width: "100%", height: 300 }}

                      source={
                        newProfile.image.uri
                          ? { uri: newProfile.image.uri }
                          : { uri: newProfile.image }
                      }
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                      }}
                    />
                  )}
                </ImageBackground>
              </Item>
              <Text style={{ fontSize: 17, textAlign: "center" }}>
                Edit Your Picture
              </Text>
            </TouchableOpacity>
          </Item>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input
              value={newProfile.firstName}
              onChangeText={(firstName) =>
                setNewProfile({ ...newProfile, firstName })
              }
            />
          </Item>
          <Item floatingLabel last>
            <Label>Last Name</Label>
            <Input
              value={newProfile.lastName}
              onChangeText={(lastName) =>
                setNewProfile({ ...newProfile, lastName })
              }
            />
          </Item>
          {/* <Item floatingLabel last>
            <Label>Bio</Label>
            <Input
              onChangeText={(bio) => setNewProfile({ ...newProfile, bio })}
              value={newProfile.bio}
            />
          </Item> */}
        </Form>
        <Button
          style={{ marginLeft: 160, marginTop: 50, backgroundColor: "#009387" }}
          onPress={handleSubmit}
        >
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>
  );
};
export default observer(UpdateProfile);
