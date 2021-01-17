import { observer } from "mobx-react";
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
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import {
  ProfileCardItem,
  ItemDescription,
  ItemDetailCardItem,
  ItemDetailTitle,
  ItemCard,
  ItemDetailImage,
} from "../../styles";
import UpdateButton from "../buttons/UpdateButton";
import profileImg from "../../img/profileImage.jpg";
import ip from "../../stores/ipaddress";
import DeleteButton from "../buttons/DeleteButton";
import UpdateItemButton from "../buttons/UpdateItemButton";

const ItemDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const profile = profileStore.getProfileByUserId(item.ownerId);
  const handleAdd = () => {
    console.log("hello");
  };

  return (
    <>
      <ScrollView>
        <Container>
          <ItemCard>
            <ProfileCardItem>
              <Left>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ProfilePage", { profile: profile })
                  }
                >
                  <Thumbnail
                    // source={{ uri: profile.image.replace("localhost", ip) }}

                    source={
                      profile.image
                        ? {
                            uri: profile.image,
                            // uri: profile.image.replace("localhost", ip),
                          }
                        : profileImg
                    }
                  />
                </TouchableOpacity>
                <Body>
                  <Text>{profile.user.username}</Text>
                </Body>
              </Left>
              <Right>
                {authStore.user.id === profile.userId ? (
                  <ProfileCardItem>
                    <DeleteButton itemId={item.id} navigation={navigation} />
                    <UpdateItemButton item={item} navigation={navigation} />
                  </ProfileCardItem>
                ) : (
                  <Button
                    onPress={() =>
                      navigation.navigate("Request", { item: item })
                    }
                    style={{
                      width: 100,
                      height: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>Request</Text>
                  </Button>
                )}
              </Right>
            </ProfileCardItem>

            <ItemDetailCardItem>
              <Body>
                <ItemDetailImage
                  source={{
                    uri: item.image,
                  }}
                />
                <ItemDetailTitle style={{ color: "gray" }}>
                  Name <Text>{item.name}</Text> {"\n"}
                  About the Item: <Text>{item.description}</Text>
                </ItemDetailTitle>
              </Body>
            </ItemDetailCardItem>
          </ItemCard>
        </Container>
      </ScrollView>
    </>
  );
};
export default observer(ItemDetail);
