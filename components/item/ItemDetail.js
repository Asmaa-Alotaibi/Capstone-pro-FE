import { observer } from "mobx-react";
import {
  Body,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Text,
  Thumbnail,
} from "native-base";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import {
  ProfileCardItem,
  ItemDescription,
  ItemDetailCardItem,
  ItemDetailImage,
  ItemDetailTitle,
  ItemCard,
} from "../../styles";
import UpdateButton from "../buttons/UpdateButton";
import profileImg from "../../img/profileImage.jpg";
import ip from "../../stores/ipaddress";

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
          <Content style={{ backgroundColor: "white" }}>
            <ItemCard>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProfilePage", { profile: profile })
                }
              >
                <ProfileCardItem>
                  <Left>
                    <Thumbnail
                      source={
                        profile.image
                          ? {
                              uri: profile.image,
                            }
                          : profileImg
                      }
                    />
                    <Body>
                      <Text>{profile.user.username}</Text>
                    </Body>
                  </Left>
                </ProfileCardItem>
              </TouchableOpacity>
              {authStore.user.id === profile.userId ? (
                <ProfileCardItem>
                  {/* <DeleteButton itemId={item.id} navigation={navigation} /> */}
                  <UpdateButton item={item} navigation={navigation} />
                </ProfileCardItem>
              ) : null}
              <ItemDetailCardItem>
                <Body>
                  <CardItem>
                    <Left>
                      <ItemDetailTitle>{item.title}</ItemDetailTitle>
                    </Left>
                    <Right>
                      <TouchableOpacity onPress={handleAdd}>
                        <Text>Requist</Text>
                      </TouchableOpacity>
                    </Right>
                  </CardItem>

                  <ItemDetailImage
                    source={{
                      uri: item.image,
                    }}
                  />
                </Body>
              </ItemDetailCardItem>
              <CardItem>
                <ItemDescription>
                  {"      "}
                  {item.description}
                </ItemDescription>
              </CardItem>
            </ItemCard>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
};
export default observer(ItemDetail);
