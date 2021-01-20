import { observer } from "mobx-react";
import { Button, Icon, Label } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import ProfilePage from "./ProfilePage";

const MyProfile = ({ navigation }) => {
  const profile = profileStore.getProfileByUserId(authStore.user.id);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container}>
        <Avatar.Image
          source={{ uri: profile.image }}
          size={150}
          style={styles.img}
        />
      </View>
      {/* <View style={{ marginLeft: 35, marginTop: 30 }}> */}
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon style={{ color: "#009387" }} name="email" type="Entypo" />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.lable} note>
            Username
          </Text>
          <Text style={styles.text}>{authStore.user.username}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon style={{ color: "#009387" }} name="person" />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.lable} note>
            Name
          </Text>
          <Text style={styles.text}>
            {profile.firstName} {profile.lastName}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon style={{ color: "#009387" }} name="email" type="Fontisto" />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.lable} note>
            Email
          </Text>
          <Text style={styles.text}>{profile.user.email}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon style={{ color: "#009387" }} name="phone" type="AntDesign" />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.lable} note>
            Phone Number
          </Text>
          <Text style={styles.text}>{profile.user.phone}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon style={{ color: "#009387" }} name="list" />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.lable} note>
            Addresses
          </Text>
          <Button
            style={{ backgroundColor: "white" }}
            onPress={() => {
              navigation.navigate("AddressList");
            }}
          >
            <Text>Show All</Text>
          </Button>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

export default observer(MyProfile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  rowBox: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    marginTop: 40,
  },
  lable: {
    fontSize: 15,
    fontWeight: "300",
    color: "gray",
  },
  text: {
    fontWeight: "400",
    fontSize: 25,
  },
  icon: {
    width: 60,
    height: 60,
    marginLeft: 30,
    marginTop: -9,
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  img: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
