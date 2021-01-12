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
import authStore from "../../stores/authStore";
import LogOutButton from "../buttons/LogOutButton";
import CategoryItemList from "../item/CategoryItemList";
import AddItem from "../item/AddItem";
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
          <>
            <Tab.Screen name="MyProfile" component={ProfileStackScreen} />
            <Tab.Screen name="AddItem" component={AddItem} />
          </>
        )}

        <Tab.Screen name="Categoties" component={CategoryStackScreen} />
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
