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
      name: "FURNITURE",
      lable: "Furniture",
      image: furniture1,
    },
    {
      name: "KITCHENWARE",
      lable: "Kitchenware",
      image: kitchenware,
    },
    {
      name: "ART",
      lable: "Art",
      image: art,
    },
    {
      name: "TOYS",
      lable: "Toy",
      image: toys,
    },
    {
      name: "TOOLS",
      lable: "Tool",
      image: tools,
    },
    {
      name: "BOOKS",
      lable: "Book",
      image: book,
    },
    {
      name: "ELECTRONICS",
      lable: "Electronic",
      image: elect,
    },
    {
      name: "CLOTHES",
      lable: "Clothe",
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
    flexWrap: "wrap",
  },
});
