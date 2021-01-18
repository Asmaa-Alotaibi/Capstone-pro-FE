import AddAddress from "../address/AddAddress";
import AddItem from "../item/AddItem";
import AddressList from "../address/AddressList";
import Categories from "../categories";
import CategoryItemList from "../item/CategoryItemList";
import DeleteButton from "../buttons/DeleteButton";
import DriverHomePage from "../drivers/DriverHomePage";
import DriversList from "../DriversList";
import Home from "../Home";
import { Icon } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemDetail from "../item/ItemDetail";
import ItemList from "../item/ItemList";
import LogOutButton from "../buttons/LogOutButton";
import MyProfile from "../profile/MyProfile";
import { NavigationContainer } from "@react-navigation/native";
import NewItemList from "../item/NewItemList";
import ProfileList from "../profile/ProfileList";
import ProfilePage from "../profile/ProfilePage";
import QRScanner from "../QRScanner";
import QRScannertButton from "../buttons/QRScannertButton";
import QRgenerator from "../QRgenerator";
import React from "react";
import Request from "../Request";
import RequestSummary from "../RequestSummary";
import RequestedItemList from "../item/RequestedItemList";
import SignInHook from "../SignInHook";
import SignUpHook from "../SignUpHook";
import Signin from "../Signin";
import Signup from "../Signup";
import UpdateAddress from "../address/UpdateAddress";
import UpdateButton from "../buttons/UpdateButton";
import UpdateItem from "../item/UpdateItem";
 
import QRScanner from "../QRScanner";
import RequestedItemList from "../item/RequestedItemList";
 
import UpdateProfile from "../profile/UpdateProfile";
import authStore from "../../stores/authStore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
 

// import { Tab } from "native-base";

// const { Navigator, Screen } = createStackNavigator();
const MainTab = createBottomTabNavigator();
const DriverTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const AuthStack = createStackNavigator();
const DriverStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={SignUpHook} />
    </AuthStack.Navigator>
  );
  const DriverStackScreen = () => (
    <DriverStack.Navigator>
      <DriverStack.Screen
        name="RequestedItemList"
        component={RequestedItemList}
      />
    </DriverStack.Navigator>
  );
  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
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
      <HomeStack.Screen name="AddressList" component={AddressList} />
      <HomeStack.Screen name="AddAddress" component={AddAddress} />
      <HomeStack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
          };
        }}
      />
      <HomeStack.Screen name="Request" component={Request} />
      <HomeStack.Screen name="RequestSummary" component={RequestSummary} />
      <HomeStack.Screen name="QRScanner" component={QRScanner} />
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
      <ProfileStack.Screen name="ItemList" component={ItemList} />
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
      <ProfileStack.Screen name="UpdateAddress" component={UpdateAddress} />

      <ProfileStack.Screen name="Request" component={Request} />
      <ProfileStack.Screen name="RequestSummary" component={RequestSummary} />
      <ProfileStack.Screen name="QRScanner" component={QRScanner} />
    </ProfileStack.Navigator>
  );
  const CategoryStackScreen = () => (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={Categories} />
      <CategoriesStack.Screen
        name="CategoryItemList"
        component={CategoryItemList}
      />

      <CategoriesStack.Screen name="Request" component={Request} />
      <CategoriesStack.Screen
        name="RequestSummary"
        component={RequestSummary}
      />
      <CategoriesStack.Screen name="QRScanner" component={QRScanner} />
    </CategoriesStack.Navigator>
  );
  const MainTabScreen = () => (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeStackScreen} />
      {authStore.user.id === 0 ? (
        <MainTab.Screen name="SignInHook" component={SignInHook} />
      ) : (
        <>
          <MainTab.Screen name="MyProfile" component={ProfileStackScreen} />
          <MainTab.Screen name="AddItem" component={AddItem} />
        </>
      )}

      <MainTab.Screen name="Categoties" component={CategoryStackScreen} />
    </MainTab.Navigator>
  );
  const DriverTabScreen = () => (
    <DriverTab.Navigator>
      <DriverTab.Screen name="Home" component={DriverHomePage} />
      <DriverTab.Screen name="Deliveries" component={DriverStackScreen} />
    </DriverTab.Navigator>
  );
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainTabScreen} />

        {authStore.user.driver ? (
          <Drawer.Screen name="Driver" component={DriverTabScreen} />
        ) : null}
        {authStore.user.id === 0 ? (
          <>
            <Drawer.Screen name="Signin" component={AuthStackScreen} />
          </>
        ) : (
          <Drawer.Screen name="LogOut" component={LogOutButton} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

{
  /* <>
  
   <Screen name="DriversList" component={DriversList} />
  <Navigator initialRouteName="Home">

    <Screen name="Home" component={Home} options={{ headerShown: false }} />

  

    <Screen name="Profiles" component={ProfileList} />
    <Screen name="ItemList" component={ItemList} />
  
  </Navigator> */
}
// </>;

export default observer(Router);
