import { Container } from "native-base";
import React from "react";
import CategoryButton from "./CategoryButton";

const Categories = ({ navigation }) => {
  const category = ["furniture", "toyes", "gears", "books"];
  let index = 0;
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} key={index++} />
  ));

  return <Container>{categories}</Container>;
};

export default Categories;
