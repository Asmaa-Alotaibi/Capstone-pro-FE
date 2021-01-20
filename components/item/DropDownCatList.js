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
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{ justifyContent: "flex-center" }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={onChangeText}
        labelStyle={{ fontSize: 14, textAlign: "left", color: "#000" }}
        searchable={true}
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
    zIndex: 200,
    position: "relative", //tried this didnt work !
  },
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    height: 50,
    color: "white",
  },
  categories: {
    height: 60,
    width: 350,
    paddingVertical: 10,
  },
});
