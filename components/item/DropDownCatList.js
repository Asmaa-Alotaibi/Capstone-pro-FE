import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React from "react";

const categories = [
  { label: "Furniture", value: "furniture" },
  { label: "Toys", value: "toys" },
  { label: "Books", value: "books" },
  { label: "Clothes", value: "clothes" },
  { label: "Electronic", value: "electronic" },
  { label: "Tools", value: "tools" },
  { label: "Kitchenware", value: "kitchenware" },
  { label: "Art", value: "art" },
];

const DropDownCatList = ({ onChangeText, category }) => {
  return (
    <View style={styles.dropdownview}>
      <DropDownPicker
        items={categories}
        defaultValue={category}
        containerStyle={styles.categories}
        style={{ backgroundColor: "white" }}
        itemStyle={{ justifyContent: "flex-center" }}
        dropDownStyle={{ backgroundColor: "white", height: 500 }}
        onChangeItem={onChangeText}
        labelStyle={{ fontSize: 18, textAlign: "left", color: "#000" }}
        searchable={true}
        placeholderStyle={{ color: "gray" }}
        placeholder={"Select a Category"}
        searchablePlaceholder="Search here !"
        searchablePlaceholderTextColor="gray"
        seachableStyle={{}}
        searchableError={() => <Text>Not Found</Text>}
      />
    </View>
  );
};

export default DropDownCatList;

const styles = StyleSheet.create({
  dropdownview: {
    zIndex: 100,
    backgroundColor: "white",
    flex: 1,
    // marginTop: 5,
  },
  container: {
    // flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  categories: {
    height: 80,
    width: "100%",
    backgroundColor: "white",
    // paddingVertical: 10,
  },
});
