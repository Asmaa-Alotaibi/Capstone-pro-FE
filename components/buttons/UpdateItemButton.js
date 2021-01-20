import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text } from "native-base";
import React from "react";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
const UpdateItemButton = ({ navigation, item }) => {
  const profile = profileStore.getProfileByUserId(authStore.user.id);
  const _navigation = navigation ? navigation : useNavigation();
  return (
    <Icon
      onPress={() =>
        item
          ? _navigation.navigate("UpdateItem", { item: item })
          : _navigation.navigate("UpdateProfile", { profile: profile })
      }
      name="edit"
      type="FontAwesome"
      style={{
        color: "gray",
        marginRight: 10,
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
    />
  );
};

export default UpdateItemButton;
