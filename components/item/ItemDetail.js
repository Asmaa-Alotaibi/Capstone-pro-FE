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

import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";
import authStore from "../../stores/authStore";
import ip from "../../stores/ipaddress";
import { observer } from "mobx-react";
import profileImg from "../../img/profileImage.jpg";
import profileStore from "../../stores/profileStore";

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
                    <Body>
                      <Text>{profile.user.username}</Text>
                    </Body>
                  </Left>
                </ProfileCardItem>
              </TouchableOpacity>
              {authStore.user.id === profile.userId ? (
                <ProfileCardItem>
                  <DeleteButton itemId={item.id} navigation={navigation} />
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
                        <Text>Request</Text>
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
            <Button
              onPress={() => navigation.navigate("Request", { item: item })}
              style={{ width: 80, height: 30 }}
            >
              <Text style={{ fontSize: 10 }}>Request</Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
};
export default observer(ItemDetail);
