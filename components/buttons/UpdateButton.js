import { Button, Text } from "native-base";
import React from "react";
const UpdateButton = ({ profile, navigation }) => {
  return (
    <>
      <Button
        onPress={() =>
          navigation.navigate("UpdateProfile", { profile: profile })
        }
        bordered
        dark
        style={{
          marginLeft: 50,
          borderColor: "gray",
          width: 300,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text>Edit Your Profile</Text>
      </Button>
    </>
  );
};

export default UpdateButton;
