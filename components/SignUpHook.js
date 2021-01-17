import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import React from "react";
import authStore from "../stores/authStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";

export default function App({ navigation }) {
  const { control, handleSubmit, errors, getValues } = useForm();
  const usernameInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const phonenumberInputRef = React.useRef();


  const onSubmit = async (user, { navigation }) => {
    console.log(user);
    await authStore.signup(user);
    const newUser = authStore.user;
    console.log("from sign up>>", newUser);
    navigation.navigate("Signup");
// =======
//   const onSubmit = async (user) => {
    // console.log(user);
//     await authStore.signup(user);
//     showMessage({
//       message: `Welcome ${authStore.user.username}`,
//       description: `You Signed up Succesfully, Thanks !`,
//       type: "default",
//       backgroundColor: "black", // background color
//       color: "#fff",
//     });
    // const newUser = authStore.user;
    // console.log("from sign up>>", newUser);

  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>username</Text>
        <Controller
          name="username"
          defaultValue=""
          control={control}
          rules={{ required: "Username is required." }}
          onFocus={() => {
            usernameInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={usernameInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

      {errors.username && <Text>This field is required.</Text>}

      <View>
        <Text style={styles.label}>Password</Text>
        <Controller
          name="password"
          //   type={password}
          defaultValue=""
          control={control}
          type="hidden"
          rules={{
            required: { value: true, message: "Password is required." },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Incorrect",
            },
          }}
          onFocus={() => {
            passwordInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={passwordInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

      {getValues("password") === "" && <Text>This field is required.</Text>}

      {errors.password && getValues("password") !== "" && (
        <Text>
          You need atleast one upper-case, lower-case, number, and special
          character. Minimum 8 characters.
        </Text>
      )}

      <View>
        <Text style={styles.label}>Phone Number</Text>
        <Controller
          name="phonenumber"
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: "Phone Number is required." },
            pattern: {
              value: /\d{8}$/,
              message: "Incorrect",
            },
          }}
          onFocus={() => {
            phonenumberInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={phonenumberInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

      {getValues("phonenumber") === "" && <Text>This field is required.</Text>}

      {errors.phonenumber && <Text>This field is required.</Text>}

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <TouchableOpacity onPress={() => navigation.replace("Signin")}>
        <Text style={styles.loginText}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    backgroundColor: "#ec5990",
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
    color: "black",
  },
});
