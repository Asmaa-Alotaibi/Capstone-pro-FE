import { Button, Container, Text } from "native-base";
import React from "react";
import ItemList from "./item/ItemList";

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text>"ReUse !"</Text>
      <Button
        onPress={() => {
          navigation.navigate("NewItemList");
        }}
      >
        <Text>Click here to skip</Text>
      </Button>
    </Container>
  );
};

export default Home;
