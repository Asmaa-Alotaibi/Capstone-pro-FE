import { Button, Container, View, Text } from "native-base";
import React from "react";
import CategoryButton from "./CategoryButton";
import profileImg from "../img/profileImage.jpg";

const Categories = ({ navigation }) => {
  const category = ["furniture", "toyes", "gears", "books"];
  let index = 0;
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} key={index++} />
  ));
  return (
    <>
      <Container>{categories}</Container>
    </>
  );
};

export default Categories;
