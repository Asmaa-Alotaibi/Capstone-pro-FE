import Categories from "./categories";
import CategoryItemList from "./item/CategoryItemList";
import Home from "./Home";
import ItemDetail from "./item/ItemDetail";
import ItemList from "./item/ItemList";
import MyProfile from "./profile/MyProfile";
import { NavigationContainer } from "@react-navigation/native";
import NewItemList from "./item/NewItemList";
import ProfileList from "./profile/ProfileList";
import ProfilePage from "./profile/ProfilePage";
import React from "react";
import SignUpHook from "./SignUpHook";
import Signin from "./Signin";
import Signup from "./Signup";
import UpdateProfile from "./profile/UpdateProfile";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SignUpHook">
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: true }}
        />
        <Screen
          name="SignUpHook"
          component={SignUpHook}
          options={{ headerShown: true }}
        />
        <Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: true }}
        />
        <Screen name="NewItemList" component={NewItemList} />
        <Screen name="Categories" component={Categories} />
        <Screen name="CategoryItemList" component={CategoryItemList} />
        <Screen name="MyProfile" component={MyProfile} />
        <Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={({ route }) => {
            const { profile } = route.params;
            return {
              title: profile.user.username,
              headerRight: () => <AddButton />,
            };
          }}
        />
        <Screen
          name="ProfilePage"
          component={ProfilePage}
          options={({ route }) => {
            const { profile } = route.params;


        <Screen name="MyProfile" component={MyProfile} />
        <Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={({ route }) => {
            const { profile } = route.params;
            return {
              title: profile.user.username,
              headerRight: () => <AddButton />,
            };
          }}
        />
        <Screen
          name="ProfilePage"
          component={ProfilePage}
          options={({ route }) => {
            const { profile } = route.params;

            return {
              title: profile.user.username,
            };
          }}
        />
        <Screen name="Profiles" component={ProfileList} />
        <Screen name="ItemList" component={ItemList} />
        <Screen
          name="ItemDetail"
          component={ItemDetail}
          options={({ route }) => {
            const { item } = route.params;
            return {
              title: item.title,
            };
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default observer(Router);
