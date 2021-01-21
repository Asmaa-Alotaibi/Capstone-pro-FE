import { Containerr } from "../../styles";
import React from "react";
import SingleAddress from "../SingleAddress";
import { Button, Icon, Spinner, View } from "native-base";
import addressStore from "../../stores/addressStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import AddAddress from "./AddAddress";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AddressList = ({ route, navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (addressStore.loading) return <Spinner />;
  const { userId } = route.params;
  const addressList = addressStore.addresses
    .filter((address) => address.profileId === userId)
    .map((address) => (
      <SingleAddress
        address={address}
        key={address.id}
        navigation={navigation}
      />
    ));
  console.log(addressList, "from Address List");

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View>{addressList}</View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 10 }}>
        <Button
          style={{
            width: 90,
            marginTop: 20,
            marginLeft: 160,
            marginBottom: 10,
            justifyContent: "center",
            backgroundColor: "#009387",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 5,
          }}
          onPress={() =>
            navigation.navigate("AddAddress", { fromaddItem: "false" })
          }
        >
          <Text style={{ marginTop: 3, color: "white" }}>Add New</Text>
        </Button>
      </View>
    </View>
  );
};
export default observer(AddressList);
