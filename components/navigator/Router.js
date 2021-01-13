import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signin from "../Signin";
import Signup from "../Signup";
import Home from "../Home";
import NewItemList from "../item/NewItemList";
import { observer } from "mobx-react";
import MyProfile from "../profile/MyProfile";
import UpdateProfile from "../profile/UpdateProfile";
import ProfilePage from "../profile/ProfilePage";
import ProfileList from "../profile/ProfileList";
import ItemDetail from "../item/ItemDetail";
import ItemList from "../item/ItemList";
import Categories from "../categories";
import CategoryItemList from "../item/CategoryItemList";
import Request from "../Request";
import DriversList from "../DriversList";

import authStore from "../../stores/authStore";
import LogOutButton from "../buttons/LogOutButton";
import RequestSummary from "../RequestSummary";
// import { Tab } from "native-base";
// const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ItemDetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CategoriesStack = createStackNavigator();

const Router = () => {
  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="NewItemList" component={NewItemList} />
      <HomeStack.Screen name="Request" component={Request} />
      <HomeStack.Screen name="RequestSummary" component={RequestSummary} />
      <HomeStack.Screen name="DriversList" component={DriversList} />
      <HomeStack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={({ route }) => {
          const { item } = route.params;
          return {
            title: item.title,
          };
        }}
      />
      <HomeStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
          };
        }}
      />
      <HomeStack.Screen name="Signup" component={Signup} />
      <HomeStack.Screen name="Signin" component={Signin} />
    </HomeStack.Navigator>
  );

  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerLeft: () => <LogOutButton />,
        }}
      />

      <ProfileStack.Screen
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
    </ProfileStack.Navigator>
  );

  const CategoryStackScreen = () => (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={Categories} />
      <CategoriesStack.Screen
        name="CategoryItemList"
        component={CategoryItemList}
      />
    </CategoriesStack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        {authStore.user.id === 0 ? (
          <Tab.Screen name="Signin" component={Signin} />
        ) : (
          <Tab.Screen name="MyProfile" component={ProfileStackScreen} />
        )}

        <Tab.Screen name="Categoties" component={CategoryStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

{
  /* <>
  <Navigator initialRouteName="Home">

    <Screen name="Home" component={Home} options={{ headerShown: false }} />

    <Screen name="CategoryItemList" component={CategoryItemList} />
  

    <Screen name="Profiles" component={ProfileList} />
    <Screen name="ItemList" component={ItemList} />
  
  </Navigator> */
}
// </>;

export default observer(Router);
