import React from "react";
import Router from "./components/navigator/Router";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class App extends React.Component {
  state = {
    loading: true,
  };
  // To load Fonts before loading the app
  async componentDidMount() {
    try {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });

      this.setState({ loading: false });
    } catch (error) {
      console.log("error loading icon fonts", error);
    }
  }
  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return <Router />;
  }
}
