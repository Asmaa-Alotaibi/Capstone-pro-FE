import { Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageCarousel from "./Carousel";
import NewItemList from "./item/NewItemList";
import Flatcategories from "./Flatcategories";
import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View style={{ height: 800 }}>
          <ImageCarousel navigation={navigation} />
        </View>
        <Text
          style={{
            fontSize: 40,
            color: "black",
            paddingLeft: 5,
            fontWeight: "600",
            marginTop: -390,
            marginBottom: -5,
          }}
        >
          Categories
        </Text>
        <Flatcategories navigation={navigation} />
        <Text
          style={{
            fontSize: 40,
            color: "black",
            marginTop: 20,
            marginBottom: -5,
            paddingLeft: 10,
            fontWeight: "600",
            textAlign: "left",
            // marginTop: -400,
            // borderRadius: 10,
            // shadowColor: "gray",
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.9,
            // shadowRadius: 7,

            // elevation: 5,
          }}
        >
          New Arrivale
        </Text>
        <NewItemList navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default observer(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 1000,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
