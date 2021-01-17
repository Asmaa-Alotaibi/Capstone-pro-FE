import { StyleSheet, Text, View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import React from "react";

const areas = [
  { label: "Abdullah Al Salem", value: "abdullah al salem" },
  { label: "Bayan", value: "bayan" },
  { label: "Bneid Al Qar", value: "bneid al qar" },
  { label: "Faiha", value: "faiha" },
  { label: "Kaifan", value: "kaifan" },
  { label: "Khaldiya", value: "khaldiya" },
  { label: "Kuwait City", value: "kuwait city" },
  { label: "Mansouriya", value: "mansouriya" },
  { label: "Mirqab", value: "mirqab" },
  { label: "Nuzha", value: "nuzha" },
  { label: "Qadsiya", value: "qadsiya" },
  { label: "Qortuba", value: "qortuba" },
  { label: "Salhiya", value: "salhiya" },
  { label: "Shamiya", value: "shamiya" },
  { label: "Sharq", value: "sharq" },
  { label: "Surra", value: "surra" },
  { label: "Yarmouk", value: "yarmouk" },
  { label: "Shuwaikh Residential", value: "shuwaikh residential" },
  { label: "Al Hamra Tower", value: "al hamra tower" },
  { label: "Ministries Area", value: "ministries area" },
];

const DropDownList = ({ onChangeText, city }) => {
  console.log(city, "dropdownpicker");
  return (
    <View style={styles.dropdownview}>
      <DropDownPicker
        items={areas}
        defaultValue={city}
        containerStyle={styles.cities}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{ justifyContent: "flex-center" }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={onChangeText}
        labelStyle={{ fontSize: 14, textAlign: "left", color: "#000" }}
        searchable={true}
        searchablePlaceholder="Search for an item"
        searchablePlaceholderTextColor="gray"
        seachableStyle={{}}
        searchableError={() => <Text>Not Found</Text>}
      />
    </View>
  );
};

export default DropDownList;

const styles = StyleSheet.create({
  dropdownview: {
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  cities: {
    height: 60,
    width: 350,
    paddingVertical: 10,
  },
});
