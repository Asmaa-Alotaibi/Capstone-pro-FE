import { StyleSheet, Text, View } from "react-native";

import DeleteAddress from "./address/DeleteAddress";
import React from "react";
import UpdateAddressButton from "./address/UpdateAddressButton";
import { observer } from "mobx-react";
import UpdateItemButton from "./buttons/UpdateItemButton";

const SingleAddress = ({ address, navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.address}>
          <Text style={([styles.text], { color: "gray" })}>
            City {"   "}
            <Text style={styles.text}> {address.city}</Text>
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={([styles.text], { color: "gray" })}>
              Block:
              <Text style={styles.text}>
                {" "}
                {address.block} {"    "}
              </Text>
            </Text>
            <Text style={([styles.text], { color: "gray" })}>
              Street:
              <Text style={styles.text}>
                {" "}
                {address.block}
                {"    "}
              </Text>
            </Text>
            <Text style={([styles.text], { color: "gray" })}>
              Avenue: <Text style={styles.text}> {address.avenue}</Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={([styles.text], { color: "gray" })}>
              House
              <Text style={styles.text}>
                {" "}
                {address.house} {"    "}
              </Text>
            </Text>

            <Text style={([styles.text], { color: "gray" })}>
              Flat
              <Text style={styles.text}>
                {" "}
                {address.flat} {"    "}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            // flexDirection: "row",
            position: "absolute",
            right: 20,
          }}
        >
          <View
            style={{
              marginTop: 10,
              marginBottom: 20,
              marginRight: 0,
            }}
          >
            <UpdateAddressButton address={address} navigation={navigation} />
          </View>
          <View
            style={{
              // marginTop: 30,
              marginBottom: 20,
              // marginLeft: 1,
              marginRight: 10,
            }}
          >
            <DeleteAddress addressId={address.id} navigation={navigation} />
          </View>
        </View>
      </View>
      <View></View>
    </>
  );
};

export default observer(SingleAddress);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    margin: 5,
    backgroundColor: "white",
  },
  text: {
    fontSize: 19,
    fontWeight: "300",
    color: "black",
  },
  address: {
    margin: 18,
  },
});
