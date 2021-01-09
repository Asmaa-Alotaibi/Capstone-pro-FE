import { Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const CategoryButton = ({ navigation, category }) => {
  return (
    <View>
      <Button
        onPress={() =>
          navigation.navigate("CategoryItemList", { category: category })
        }
      >
        <Text>{category}</Text>
      </Button>
    </View>
  );
};

export default CategoryButton;
