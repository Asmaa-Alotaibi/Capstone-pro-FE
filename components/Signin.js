import { Button, Container, Form, Input, Item, Label } from "native-base";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { showMessage } from "react-native-flash-message";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    navigation.navigate("Home");
    await authStore.signin(user);
    {
      authStore.user.id !== 0
        ? showMessage({
            message: `Welcome ${authStore.user.username}`,
            description: `You Signed in Succesfully, Thanks !`,
            type: "default",
            backgroundColor: "black", // background color
            color: "#fff",
          })
        : showMessage({
            message: `Fieled Required`,
            description: `Please Fill The Username and the Password`,
            type: "default",
            backgroundColor: "black", // background color
            color: "#fff",
          });
    }
    const loggedinUser = authStore.user;

    console.log("from sign in>>", loggedinUser);
  };

  const handleSignout = () => {
    authStore.signout();
    navigation.navigate("Signup"); //redirect to home
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ReUse</Text>
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("Signup")}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity block dark onPress={() => handleSignout()}>
        <Text style={styles.loginText}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Signin);

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
