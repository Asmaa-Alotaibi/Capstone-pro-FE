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

const Categories = ({ navigation }) => {
  const category = [
 
    {
      name: "FURNITURES",
      lable: "furnitures",
      image: furniture1,
    },
    {
      name: "KITCHENWARES",
      lable: "kitchenwares",
      image: kitchenware,
    },
    {
      name: "ARTS",
      lable: "arts",
      image: art,
    },
    {
      name: "TOYS",
      lable: "toys",
      image: toys,
    },
    {
      name: "TOOLS",
      lable: "tools",
      image: tools,
    },
    {
      name: "BOOKS",
      lable: "books",
      image: book,
    },
    {
      name: "ELECTRONICS",
      lable: "electronics",
      image: elect,
    },
    {
      name: "CLOTHES",
      lable: "clothes",
      image: clothes,
    },
 
  ];
  let index = 0;
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} key={index++} />
  ));
 
  return <View style={styles.container}>{categories}</View>;
 
};

export default Categories;
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
