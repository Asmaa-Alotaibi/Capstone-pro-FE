import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
} from "native-base";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const areas = [
  { label: "Abdullah Al Salem", value: "abdullah al salem" },
  { label: "Adailiya", value: "adailiya" },
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

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    city: "",
    block: "",
    avenue: "",
    street: "",
    house: "",
    flat: "",
  });
  const [address, setAddress] = useState({
    city: "",
    block: "",
    avenue: "",
    street: "",
    house: "",
    flat: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    const newUser = authStore.user;
    console.log("from sign up>>", newUser);
  };
  return (
    <Content>
      <View style={styles.container}>
        <Text style={styles.logo}>ReUse</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, firstName: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, lastName: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            placeholder="Username..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, username: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View>
        <View style={styles.dropdownview}>
          <DropDownPicker
            items={areas}
            defaultValue={setAddress.city}
            containerStyle={style.cities}
            style={{ backgroundColor: "#fafafa" }}
            // itemStyle={{ justifyContent: "flex-center" }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(item) => setAddress({ city: item.value })}
            labelStyle={{ fontSize: 14, textAlign: "left", color: "#000" }}
            searchable={true}
            searchablePlaceholder="Search for an item"
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Block..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setAddress({ ...address, block: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Street..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setAddress({ ...address, street: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Avenue..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setAddress({ ...address, avenue: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="House..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setAddress({ ...address, house: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Flat..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setAddress({ ...address, flat: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("Signin")}>
          <Text style={styles.loginText}>Signin</Text>
        </TouchableOpacity>
      </View>
    </Content>
  );
};

export default observer(Signup);

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
