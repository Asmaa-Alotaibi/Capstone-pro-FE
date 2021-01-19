import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import driver from "../img/driver.jpg";
import receiving from "../img/receiving.jpg";

const { width } = Dimensions.get("window");
const data = [
  {
    uri: driver,
    title: "Deliver Mode",
    content: "Volunteer to transport items from point A to point B",
    lit: "Deliver",
  },
  {
    uri: receiving,
    title: "A chance to Re Use Items",
    content: "Bridging the gap between giving and getting",
    lit: "Give. Get",
  },
];

export default class ImageCarousel extends Component {
  renderItem = ({ item, index }) => {
    const { uri, title, content, lit } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground source={uri} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>{lit}</Text>
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.box}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.contentText}>{content}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ height: "50%" }}>
        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={this.renderItem}
          itemWidth={width}
          inActiveOpacity={0.3}
          containerWidth={width}
          pagingEnable={true}
          ref={(c) => {
            this.numberCarousel = c;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    // flex: 1,
    // height: "50%",s
    // width: "130%",
    // backgroundColor: "#141518",
  },
  item: {
    // backgroundColor: "white",
    // flex: 1,
    height: "90%",
    // width: "130%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7,

    elevation: 5,
  },
  imageBackground: {
    // flex: 2,
    height: "100%",
    width: "98%",
    // backgroundColor: "#EBEBEB",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 10,
  },
  rightTextContainer: {
    marginLeft: "auto",
    marginRight: -2,
    backgroundColor: "rgba(49, 49, 51,0.5)",
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: { color: "white" },
  lowerContainer: {
    // flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#7d7e8073",
    position: "absolute",
    // bottom: 10,
    // margin: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,

    elevation: 5,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 5,
    shadowRadius: 5,

    elevation: 5,
  },
  box: {
    position: "absolute",
    bottom: 10,
    margin: 10,
  },
});
