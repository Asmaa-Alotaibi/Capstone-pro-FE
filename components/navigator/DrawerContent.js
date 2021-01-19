import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Avatar,
  Caption,
  Drawer,
  Switch,
  Title,
  TouchableRipple,
} from "react-native-paper";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import profileImg from "../../img/profileImage.jpg";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

const DrawerContent = (props) => {
  const handleLogOut = () => {
    setIsDriver(false);
    authStore.signout();
    props.navigation.navigate("Main");
  };
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const [isDriver, setIsDriver] = useState(false);
  const toggleDriver = () => {
    setIsDriver(!isDriver);
    {
      !isDriver
        ? props.navigation.navigate("Driver")
        : props.navigation.navigate("Main");
    }
  };
  const profile = profileStore.getProfileByUserId(authStore.user.id);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {authStore.user.id !== 0 ? (
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={profile.image ? { uri: profile.image } : profileImg}
                  size={50}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>
                    {profile.firstName} {profile.lastName}
                  </Title>
                  <Caption style={styles.caption}>
                    @{profile.user.username}
                  </Caption>
                </View>
              </View>
            </View>
          </View>
        ) : null}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="view-list-outline" color={color} size={size} />
            )}
            label="Categories"
            onPress={() => {
              props.navigation.navigate("Categories");
            }}
          />
          {authStore.user.id !== 0 ? (
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("MyProfile");
              }}
            />
          ) : (
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Signin");
              }}
            />
          )}
        </Drawer.Section>
        {authStore.user.id !== 0 ? (
          <Drawer.Section title="Delivery Mode">
            <TouchableRipple
              onPress={() => {
                toggleDriver();
              }}
            >
              <View style={styles.prefrence}>
                <Text>Switch To {!isDriver ? "Deliver" : "Shop"}</Text>
                <View pointerEvents="none">
                  <Switch value={isDriver} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        ) : null}
      </DrawerContentScrollView>
      <Drawer.Section style={StyleSheet.bottomDrawerSection}>
        <Drawer.Section title="Prefernces">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.prefrence}>
              <Text>Dark Mode</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
        {authStore.user.id !== 0 ? (
          <DrawerItem
            style={{ backgroundColor: "#009387" }}
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            inactiveTintColor="white"
            onPress={handleLogOut}
          />
        ) : null}
      </Drawer.Section>
    </View>
  );
};
export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  prefrence: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
