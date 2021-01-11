import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/authStore";

const LogOutButton = () => {
  const navigation = useNavigation();
  const handleLogOut = () => {
    authStore.signout();
    navigation.replace("NewItemList");
  };
  return (
    <Icon
      onPress={handleLogOut}
      name="logout"
      type="AntDesign"
      style={{ marginLeft: 10, color: "red" }}
    />
  );
};

export default LogOutButton;
