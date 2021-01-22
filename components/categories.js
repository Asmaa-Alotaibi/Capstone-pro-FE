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
      lable: "Arts",
      image: art,
    },
    {
      name: "TOYS",
      lable: "Toys",
      image: toys,
    },
    {
      name: "TOOLS",
      lable: "Tools",
      image: tools,
    },
    {
      name: "BOOKS",
      lable: "Books",
      image: book,
    },
    {
      name: "ELECTRONICS",
      lable: "Electronics",
      image: elect,
    },
    {
      name: "CLOTHES",
      lable: "Clothes",
      image: clothes,
    },
  ];
  let index = 0;
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} key={index++} />
  ));

  return <View style={styles.container}>{categories}</View>;
};

export default observer(Categories);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
