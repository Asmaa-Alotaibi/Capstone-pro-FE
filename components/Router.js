import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import NewItemList from "./NewItemList";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
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
      </Navigator>
    </NavigationContainer>
  );
};

export default observer(Router);
