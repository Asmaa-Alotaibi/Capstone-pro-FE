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
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="City..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, city: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Block..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, block: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Street..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, street: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Avenue..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, avenue: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="House..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, house: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Flat..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUser({ ...user, flat: text })}
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
});
