import { Button, Container, Text, Spinner } from "native-base";
import React from "react";
import itemStore from "../stores/itemStore";
import SingleItem from "./item/SingleItem";
import CategoryButton from "./CategoryButton";
const Categories = ({ navigation }) => {
  const category = ["furniture", "toyes", "gears", "books"];
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} />
  ));

  return <Container>{categories}</Container>;
};

export default Categories;
