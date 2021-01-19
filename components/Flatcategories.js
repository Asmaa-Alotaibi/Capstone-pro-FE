import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CategoryButton from "./CategoryButton";
import furniture1 from "../img/furniture1.jpg";
import toys from "../img/toys.jpg";
import book from "../img/book.jpg";
import tools from "../img/tools.jpg";
import clothes from "../img/clothes.jpg";
import elect from "../img/ELECT.jpg";
import kitchenware from "../img/kitchenware.jpg";
import art from "../img/art.jpg";
import { observer } from "mobx-react";

const Categories = ({ navigation }) => {
  const category = [
    {
      name: "FURNITURES",
      image: furniture1,
    },
    {
      name: "KITCHENWARES",
      image: kitchenware,
    },
    {
      name: "ARTS",
      image: art,
    },
    {
      name: "TOYS",
      image: toys,
    },
    {
      name: "TOOLS",
      image: tools,
    },
    {
      name: "BOOKS",
      image: book,
    },
    {
      name: "ELECTRONICS",
      image: elect,
    },
    {
      name: "CLOTHES",
      image: clothes,
    },
  ];
  let index = 0;
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} key={index++} />
  ));
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>{categories}</View>
    </ScrollView>
  );
};

export default observer(Categories);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    // flexWrap: "wrap",
  },
});
