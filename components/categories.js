import { Button, Container, View, Text } from "native-base";
import React from "react";
import CategoryButton from "./CategoryButton";

const Categories = ({ navigation }) => {
  const category = ["furniture", "toyes", "gears", "books"];
  let index = 0;
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} key={index++} />
  ));
  return (
    <>
      <Container>{categories}</Container>
      <Button
        onPress={() => navigation.navigate("QRScanner")}
        style={{ width: 80, height: 30 }}
      >
        <Text style={{ fontSize: 10 }}>testQR Scanner</Text>
      </Button>
    </>
  );
};

export default Categories;
