import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";

import React, { useState } from "react";
import authStore from "../stores/authStore";
import { EyeButtonStyled } from "../styles";
import { Button, Icon } from "native-base";
export default function App({ navigation }) {
  const { control, handleSubmit, errors, getValues } = useForm();
  const usernameInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const phonenumberInputRef = React.useRef();
  const emailInputRef = React.useRef();

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
    <View style={styles.container1}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <Icon
            name="user-o"
            type="FontAwesome"
            style={{ color: "#05375a", fontSize: 20 }}
          />
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
                placeholder="USER NAME"
                style={styles.textInput}
                autoCapitalize="none"
                ref={usernameInputRef}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          {/* {data.check_textInputChange ? (
          <Icon
            type="Feather"
            name="check-circle"
            style={{ fontSize: 20, color: "green" }}
          />
        ) : null} */}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Icon
            name="lock"
            type="FontAwesome"
            style={{ color: "#05375a", fontSize: 20 }}
          />
          <Controller
            name="password"
            //   type={password}
            defaultValue=""
            control={control}
            type="password"
            rules={{
              required: { value: true, message: "Password is required." },
              // pattern: {
              //   // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              //   message: "Incorrect",
              // },
            }}
            onFocus={() => {
              passwordInputRef.current.focus();
            }}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="PASSWORD"
                style={styles.textInput}
                autoCapitalize="none"
                ref={passwordInputRef}
                onBlur={onBlur}
                secureTextEntry={true}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Email</Text>
        <View style={styles.action}>
          <Icon
            name="email"
            type="Fontisto"
            style={{ color: "#05375a", fontSize: 20 }}
          />
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="EMAIL"
                style={styles.textInput}
                autoCapitalize="none"
                ref={emailInputRef}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>
          Phone number
        </Text>
        <View style={styles.action}>
          <Icon
            name="phone"
            type="FontAwesome"
            style={{ color: "#05375a", fontSize: 20 }}
          />
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
                placeholder="PHONE NUMBER"
                style={styles.textInput}
                ref={phonenumberInputRef}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 100,
            right: 130,
          }}
        >
          <Button
            style={[styles.button, { backgroundColor: "#009387" }]}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
          </Button>
          <Button
            style={[
              styles.button,
              {
                backgroundColor: "#fff",
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#009387",
              },
            ]}
            onPress={() => navigation.navigate("SignInHook")}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>Sign In</Text>
          </Button>
        </View>
      </View>
    </View>

    /* <View style={styles.container}>
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
    </View> */
  );
}

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    // marginTop: 40,
    // color: "white",
    // backgroundColor: "#ec5990",
    // height: 40,
    // borderRadius: 4,
    alignItems: "center",
    marginTop: 30,
    width: 150,
    height: 40,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
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
  container1: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    // marginTop:
    paddingLeft: 10,
    color: "#05375a",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
});
