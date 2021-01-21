import {
  Body,
  Button,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Text,
  Thumbnail,
  View,
} from "native-base";
import {
  ItemCard,
  ItemDescription,
  ItemDetailCardItem,
  ItemDetailImage,
  ItemDetailTitle,
  ProfileCardItem,
} from "../../styles";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import UpdateButton from "../buttons/UpdateButton";
import authStore from "../../stores/authStore";
import ip from "../../stores/ipaddress";
import DeleteButton from "../buttons/DeleteButton";
import UpdateItemButton from "../buttons/UpdateItemButton";
import { observer } from "mobx-react";
import profileImg from "../../img/profileImage.jpg";
import profileStore from "../../stores/profileStore";
import itemStore from "../../stores/itemStore";
import QRScannertButton from "../buttons/QRScannertButton";
import { StyleSheet } from "react-native";

const ItemDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const profile = profileStore.getProfileByUserId(item.ownerId);

  const handlePress = () => {
    if (authStore.user.id === 0) navigation.replace("SignInHook");
    else navigation.navigate("Request", { item: item });
  };

  const handleCancel = () => {
    itemStore.cancelRequest({ ...item, recipientId: null, booked: false });
  };
  console.log("recID", item.recipientId);
  console.log("booked", item.booked);
  console.log("user", authStore.user.id);
  return (
    <>
      <Container style={{ backgroundColor: "transparent" }}>
        <ItemCard>
          <ItemDetailCardItem>
            <Body>
              <View
                style={{
                  backgroundColor: "white",
                  width: "95%",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 5,
                  marginBottom: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                <ItemDetailImage
                  source={{
                    uri: item.image,
                    // uri: item.image.replace("localhost", ip),
                  }}
                />
                <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
                  <ItemDetailTitle style={{ color: "gray" }}>
                    Name <Text>{item.name}</Text>
                    {"\n"}
                    {"\n"}About the Item: <Text>{item.description}</Text>
                  </ItemDetailTitle>
                </View>
              </View>
              <Right>
                {authStore.user.id === profile.userId ? (
                  <ProfileCardItem>
                    <DeleteButton itemId={item.id} navigation={navigation} />
                    <View style={{ marginLeft: 20 }}>
                      <UpdateItemButton item={item} navigation={navigation} />
                    </View>
                    <View style={{ marginLeft: -27 }}>
                      <QRScannertButton item={item} navigation={navigation} />
                    </View>
                  </ProfileCardItem>
                ) : item.recipientId === null ? (
                  <Button
                    onPress={() =>
                      navigation.navigate("Request", { item: item })
                    }
                    style={styles.imageRe}
                  >
                    <Text>Request</Text>
                  </Button>
                ) : (authStore.user.id === item.recipientId) & !item.gone ? (
                  <Button onPress={handleCancel} style={styles.imageCa}>
                    <Text>Cancel</Text>
                  </Button>
                ) : (
                  <Button style={styles.imageUv}>
                    <Text>Unavailable</Text>
                  </Button>
                )}
              </Right>
            </Body>
          </ItemDetailCardItem>
        </ItemCard>
      </Container>
    </>
  );
};
export default observer(ItemDetail);
const styles = StyleSheet.create({
  imageUv: {
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  imageRe: {
    width: 100,
    height: 50,
    alignItems: "center",
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
  },
  imageCa: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
