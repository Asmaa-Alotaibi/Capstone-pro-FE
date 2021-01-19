import { Button, Text } from "native-base";
import React from "react";
const UpdateButton = ({ profile, navigation, item }) => {
  return (
    <>
      <Button
        onPress={() =>
          profile
            ? navigation.navigate("UpdateProfile", { profile: profile })
            : navigation.navigate("UpdateItem", { item: item })
        }
        bordered
        dark
        style={{
          marginLeft: 50,
          borderColor: "gray",
          width: 300,
          alignContent: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "#009387",
        }}
      >
        {profile ? (
          <Text style={{ color: "white" }}>Edit Your Profile</Text>
        ) : (
          <Text>Edit Your Item</Text>
        )}
      </Button>
    </>
  );
};

export default UpdateButton;
