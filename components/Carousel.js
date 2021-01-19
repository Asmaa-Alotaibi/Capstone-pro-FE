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

const { width } = Dimensions.get("window");
const data = [
  {
    uri: "https://i.imgur.com/Pz2WYAc.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum ",
  },
  {
    uri: "https://i.imgur.com/IGRuEAa.jpg",
    title: "Lorem ipsum dolor",
    content: "Neque porro quisquam est qui",
  },
  {
    uri: "https://i.imgur.com/fRGHItn.jpg",
    title: "Lorem ipsum dolor",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
  {
    uri: "https://i.imgur.com/WmenvXr.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor ",
  },
];

export default class ImageCarousel extends Component {
  renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground source={{ uri: uri }} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
          <View style={styles.lowerContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
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
    flex: 1,
    position: "absolute",
    bottom: 10,
    margin: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  contentText: {
    fontSize: 18,
  },
});
