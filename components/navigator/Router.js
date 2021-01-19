import AddAddress from "../address/AddAddress";
import AddItem from "../item/AddItem";
import AddressList from "../address/AddressList";
import Categories from "../categories";
import CategoryItemList from "../item/CategoryItemList";
import DeleteButton from "../buttons/DeleteButton";
import DriverHomePage from "../drivers/DriverHomePage";
import DriversList from "../DriversList";
import Home from "../Home";
import { Thumbnail } from "native-base";
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
import UpdateProfile from "../profile/UpdateProfile";
import authStore from "../../stores/authStore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";
import DrawerConntent from "./DrawerContent";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// import { Tab } from "native-base";

// const { Navigator, Screen } = createStackNavigator();
const MainTab = createBottomTabNavigator();
// const MainTab1 = createMaterialBottomTabNavigator();
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
      <AuthStack.Screen
        name="Signin"
        component={Signin}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignUpHook}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
    </AuthStack.Navigator>
  );
  const DriverStackScreen = () => (
    <DriverStack.Navigator>
      <DriverStack.Screen
        name="RequestedItemList"
        component={RequestedItemList}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
    </DriverStack.Navigator>
  );
  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="NewItemList"
        component={NewItemList}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={({ route }) => {
          const { item } = route.params;
          return {
            title: item.title,
          };
        }}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="UpdateItem"
        component={UpdateItem}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="DeleteItem"
        component={DeleteButton}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
            headerLeft: () => <LogOutButton />,
          };
        }}
      />

      <HomeStack.Screen
        name="Signup"
        component={Signup}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="Signin"
        component={Signin}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="SignUpHook"
        component={SignUpHook}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="SignInHook"
        component={SignInHook}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="AddressList"
        component={AddressList}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
            headerLeft: () => <LogOutButton />,
          };
        }}
      />
      <HomeStack.Screen
        name="Request"
        component={Request}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="RequestSummary"
        component={RequestSummary}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <HomeStack.Screen
        name="QRScanner"
        component={QRScanner}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
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
        options={{ headerLeft: () => <LogOutButton /> }}
      />

      <ProfileStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <ProfileStack.Screen
        name="ItemList"
        component={ItemList}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <ProfileStack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
            headerLeft: () => <LogOutButton />,
          };
        }}
      />
      <ProfileStack.Screen
        name="UpdateAddress"
        component={UpdateAddress}
        options={{ headerLeft: () => <LogOutButton /> }}
      />

      <ProfileStack.Screen
        name="Request"
        component={Request}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <ProfileStack.Screen
        name="RequestSummary"
        component={RequestSummary}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <ProfileStack.Screen
        name="QRScanner"
        component={QRScanner}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
    </ProfileStack.Navigator>
  );
  const CategoryStackScreen = () => (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="Categories"
        component={Categories}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <CategoriesStack.Screen
        name="CategoryItemList"
        component={CategoryItemList}
        options={{ headerLeft: () => <LogOutButton /> }}
      />

      <CategoriesStack.Screen
        name="Request"
        component={Request}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <CategoriesStack.Screen
        name="RequestSummary"
        component={RequestSummary}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
      <CategoriesStack.Screen
        name="QRScanner"
        component={QRScanner}
        options={{ headerLeft: () => <LogOutButton /> }}
      />
    </CategoriesStack.Navigator>
  );
  const MainTabScreen = () => (
    <MainTab.Navigator
      tabBarOptions={{
        pressColor: "gray", //for click (ripple) effect color
        style: {
          backgroundColor: "#009387",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center", //color you want to change
        },
        activeTintColor: "white",
        inactiveTintColor: "white",
        labelStyle: {
          fontSize: 10,
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" size={26} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Categoties"
        component={CategoryStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list-circle" size={26} color={color} />
          ),
        }}
      />
      {authStore.user.id === 0 ? (
        <MainTab.Screen
          name="Signin"
          component={AuthStackScreen}
          options={{
            tabBarLabel: "Sign in",
            tabBarIcon: ({ color }) => (
              <Icon name="person" size={26} color={color} />
            ),
          }}
        />
      ) : (
        <>
          <MainTab.Screen
            name="AddItem"
            component={AddItem}
            options={{
              tabBarLabel: "Add Item",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-add-circle-sharp" size={26} color={color} />
              ),
            }}
          />
          <MainTab.Screen
            name="MyProfile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <Icon name="person" size={30} color={color} />
              ),
            }}
          />
        </>
      )}
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
      <Drawer.Navigator
        drawerContent={(props) => <DrawerConntent {...props} />}
      >
        <Drawer.Screen name="Main" component={MainTabScreen} />

        <Drawer.Screen name="Driver" component={DriverTabScreen} />
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
