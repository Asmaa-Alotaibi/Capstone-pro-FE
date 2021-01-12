import AddItem from "../item/AddItem";
import Categories from "../categories";
import CategoryItemList from "../item/CategoryItemList";
import DeleteButton from "../buttons/DeleteButton";
import Home from "../Home";
import ItemDetail from "../item/ItemDetail";
import ItemList from "../item/ItemList";
import LogOutButton from "../buttons/LogOutButton";
import MyProfile from "../profile/MyProfile";
import { NavigationContainer } from "@react-navigation/native";
import NewItemList from "../item/NewItemList";
import ProfileList from "../profile/ProfileList";
import ProfilePage from "../profile/ProfilePage";
import React from "react";
import SignInHook from "../SignInHook";
import SignUpHook from "../SignUpHook";
import Signin from "../Signin";
import Signup from "../Signup";
import UpdateButton from "../buttons/UpdateButton";
import UpdateItem from "../item/UpdateItem";
import UpdateProfile from "../profile/UpdateProfile";
import authStore from "../../stores/authStore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

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
      <HomeStack.Screen name="NewItemList" component={NewItemList} />
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
      <HomeStack.Screen name="UpdateItem" component={UpdateItem} />
      <HomeStack.Screen name="DeleteItem" component={DeleteButton} />
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
      <HomeStack.Screen name="SignUpHook" component={SignUpHook} />
      <HomeStack.Screen name="SignInHook" component={SignInHook} />
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

      <ProfileStack.Screen name="ProfilePage" component={ProfilePage} />
      <ProfileStack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
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
          <Tab.Screen name="SignUpHook" component={SignUpHook} />
        ) : (
          <>
            <Tab.Screen name="MyProfile" component={ProfileStackScreen} />
            <Tab.Screen name="AddItem" component={AddItem} />
          </>
        )}

        <Tab.Screen name="Categories" component={CategoryStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

{
  /* <>
   <Screen name="Request" component={Request} />
   <Screen name="DriversList" component={DriversList} />
  <Navigator initialRouteName="Home">

    <Screen name="Home" component={Home} options={{ headerShown: false }} />

  

    <Screen name="Profiles" component={ProfileList} />
    <Screen name="ItemList" component={ItemList} />
  
  </Navigator> */
}
// </>;

export default observer(Router);
