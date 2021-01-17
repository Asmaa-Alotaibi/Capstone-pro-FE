import { Button, Container, Text } from "native-base";

import React from "react";

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text>"ReUse !"</Text>
      <Button
        onPress={() => {
          navigation.navigate("SingleItem");
        }}
      >
        <Text>Click here to skip</Text>
      </Button>
    </Container>
  );
};

export default Home;
