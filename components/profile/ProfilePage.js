import {
  Body,
  Button,
  Content,
  Header,
  Left,
  Spinner,
  Tab,
  Tabs,
  Thumbnail,
} from "native-base";
import {
  ProfileBio,
  ProfileCard,
  ProfileCardItem,
  ProfileFirstName,
  ProfileItemList,
  ProfileItems,
  ProfileLastName,
  ProfileUserName,
} from "../../styles";
import { ScrollView, Text } from "react-native";

import AddAddress from "../address/AddAddress";
import AddressList from "../address/AddressList";
import ItemList from "../item//ItemList";
import React from "react";
import Signin from "../Signin";
import UpdateButton from "../buttons/UpdateButton";
import authStore from "../../stores/authStore";
import deleteAddress from "../address/DeleteAddress";
import itemStore from "../../stores/itemStore";
import { observer } from "mobx-react";
import profileImg from "../../img/profileImage.jpg";

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
    <>
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
              source={profile.image ? { uri: profile.image } : profileImg}
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
              <Button onPress={() => navigation.navigate("AddAddress")}>
                <Text>Add Address</Text>
              </Button>
              <AddressList userId={profile.userId} navigation={navigation} />
              <Text>
                we have to show the profile detail and it showld be shown only
                for the owner of the profile // change to profileId
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
    </>
  );
};
export default observer(ProfilePage);
