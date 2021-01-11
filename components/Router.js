import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Request from "./Request";
import NewItemList from "./item/NewItemList";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
import MyProfile from "./profile/MyProfile";
import UpdateProfile from "./profile/UpdateProfile";
import ProfilePage from "./profile/ProfilePage";
import ProfileList from "./profile/ProfileList";
import ItemDetail from "./item/ItemDetail";
import ItemList from "./item/ItemList";
import Categories from "./categories";
import CategoryItemList from "./item/CategoryItemList";
import DriversList from "./DriversList";
const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="NewItemList">
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Signin"
          component={Signin}
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
        <Screen name="Request" component={Request} />
        <Screen name="DriversList" component={DriversList} />
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
