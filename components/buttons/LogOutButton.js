import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import React from "react";
import { View, Text, Alert } from "react-native";
import authStore from "../../stores/authStore";

const LogOutButton = () => {
  const navigation = useNavigation();
  const handleLogOut = () => {
    navigation.openDrawer();
  };
  return (
    <Icon
      onPress={handleLogOut}
      name="list"
      type="Ionicons"
      style={{ marginLeft: 10, color: "#009387" }}
    />
    // Alert.alert(
    //   "Alert Title",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel",
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") },
    //   ],
    //   { cancelable: false }
    // )
  );
};

export default LogOutButton;
