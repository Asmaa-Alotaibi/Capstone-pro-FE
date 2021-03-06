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
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddressList from "../address/AddressList";
import ItemList from "../item//ItemList";
import React from "react";
import UpdateButton from "../buttons/UpdateButton";
import authStore from "../../stores/authStore";
import ip from "../../stores/ipaddress";
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
    <View style={styles.list}>
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
                : //   { uri: profile.image }
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
      <View style={styles.list}>
        {/* <Header hasTabs /> */}
        <Tabs
          tabBarActiveTextColor={"#009387"}
          tabBarUnderlineStyle={{ backgroundColor: "#009387" }}
        >
          {authStore.user.id === profile.userId ? (
            <Tab heading={`My Profile`}>
              <Button
                style={{
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.8,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                onPress={() =>
                  navigation.navigate("AddAddress", { fromaddItem: "true" })
                }
              >
                <Text>Add Address</Text>
              </Button>
              <AddressList userId={profile.userId} navigation={navigation} />
            </Tab>
          ) : null}
          <Tab heading={`${items.length} Items`}>
            <ScrollView>
              <ItemList items={items} navigation={navigation} />
            </ScrollView>
          </Tab>
          <Tab heading={`${deliveredItems.length} Deliveries`}>
            <ItemList items={deliveredItems} navigation={navigation} />
          </Tab>
          <Tab heading={`${requistedItems.length} Ordered`}>
            <ScrollView>
              <ItemList items={requistedItems} navigation={navigation} />
            </ScrollView>
          </Tab>
        </Tabs>
      </View>
    </View>
  );
};
export default observer(ProfilePage);
const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "white",
  },
});
