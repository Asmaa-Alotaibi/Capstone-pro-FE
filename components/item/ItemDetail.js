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
 
  const handleCancel = () => {
    itemStore.cancelRequest({ ...item, recipientId: null, booked: false });
 
  };
  console.log("recID", item.recipientId);
  console.log("booked", item.booked);
  console.log("user", authStore.user.id);
  return (
    <>
      <ScrollView>
        <Container>
          <ItemCard>
            <ItemDetailCardItem>
              <Body>
                <ItemDetailImage
                  source={{
                    uri: item.image,
                    // uri: item.image.replace("localhost", ip),
                  }}
                />
                <ItemDetailTitle style={{ color: "gray" }}>
                  Name <Text>{item.name}</Text>
                  {"\n"}About the Item: <Text>{item.description}</Text>
                </ItemDetailTitle>
                <Right>
                  {authStore.user.id === profile.userId ? (
                    <ProfileCardItem>
                      <DeleteButton itemId={item.id} navigation={navigation} />
                      <UpdateItemButton item={item} navigation={navigation} />
                      <QRScannertButton item={item} navigation={navigation} />
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
      </ScrollView>
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
  },
  imageRe: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  imageCa: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
