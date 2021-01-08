import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Signup">
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
      </Navigator>
    </NavigationContainer>
  );
};

export default observer(Router);
