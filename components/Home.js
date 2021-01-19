import { Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageCarousel from "./Carousel";
import NewItemList from "./item/NewItemList";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ height: 800 }}>
          <ImageCarousel navigation={navigation} />
        </View>
        <Text
          style={{
            fontSize: 40,
            paddingLeft: 5,
            fontWeight: "600",
            marginTop: -400,
          }}
        >
          New Arrivale
        </Text>
        <NewItemList navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Home;
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
