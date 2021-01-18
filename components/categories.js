import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CategoryButton from "./CategoryButton";

const Categories = ({ navigation }) => {
  const category = ["furniture", "toyes", "gears", "books"];
  let index = 0;
  const categories = category.map((e) => (
    <CategoryButton category={e} navigation={navigation} key={index++} />
  ));
  return (
    <ScrollView>
      <View style={styles.container}>{categories}</View>
    </ScrollView>
  );
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
