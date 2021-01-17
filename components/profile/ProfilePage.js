import { observer } from "mobx-react";
import {
  Body,
  Content,
  Header,
  Left,
  Spinner,
  Tab,
  Tabs,
  Thumbnail,
} from "native-base";
import React from "react";
import authStore from "../../stores/authStore";
import itemStore from "../../stores/itemStore";
import UpdateButton from "../buttons/UpdateButton";
import ItemList from "../item//ItemList";
import profileImg from "../../img/profileImage.jpg";
import {
  ProfileBio,
  ProfileCard,
  ProfileCardItem,
  ProfileFirstName,
  ProfileLastName,
  ProfileItems,
  ProfileUserName,
  ProfileItemList,
} from "../../styles";
import { ScrollView, Text, View } from "react-native";
import Signin from "../Signin";
import ip from "../../stores/ipaddress";

const ProfilePage = ({ route, navigation, Myprofile }) => {
  const profile = Myprofile ? Myprofile : route.params.profile;
  const items = itemStore.items.filter(
    (item) => item.ownerId === profile.userId
  );
  const deliveredItems = items.filter(
    (item) => item.driverId === profile.userId
  );
  const requistedItems = items.filter(
    (item) => item.recepientId === profile.userId
  );
  return (
    <ProfileCard>
      <ProfileCardItem>
        <Body>
          <ProfileUserName>{profile.user.username}</ProfileUserName>
        </Body>
      </ProfileCardItem>
      <ProfileCardItem>
        <Left>
          <Thumbnail
            large
            source={
              profile.image
                ? { uri: profile.image }
                : // ? { uri: profile.image.replace("localhost", ip) }
                  profileImg
            }
          />
          <ProfileFirstName>{profile.firstName}</ProfileFirstName>
          <ProfileLastName>{profile.lastName}</ProfileLastName>
        </Left>
        {items.length === 1 ? (
          <ProfileItems>
            {items.length}
            {"\n"}Item
          </ProfileItems>
        ) : (
          <ProfileItems>
            {items.length}
            {"\n"}Items
          </ProfileItems>
        )}
      </ProfileCardItem>
      {authStore.user.id === profile.userId ? (
        <ProfileCardItem>
          <UpdateButton profile={profile} navigation={navigation} />
        </ProfileCardItem>
      ) : null}
      <ProfileItemList>
        <Header hasTabs />
        <Tabs>
          <Tab heading={`My Profile`}>
            <Text>
              we have to show the profile detail and it showld be shown only for
              the owner of the profile
            </Text>
          </Tab>
          <Tab heading={`${items.length} Items`}>
            <ItemList items={items} navigation={navigation} />
          </Tab>
          <Tab heading={`${deliveredItems.length} Deliveries`}>
            <ItemList items={deliveredItems} navigation={navigation} />
          </Tab>
          <Tab heading={`${requistedItems.length} Requisted Items`}>
            <ItemList items={requistedItems} navigation={navigation} />
          </Tab>
        </Tabs>
      </ProfileItemList>
    </ProfileCard>
  );
};
export default observer(ProfilePage);
