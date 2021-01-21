import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, Icon } from "native-base";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import { EyeButtonStyled } from "../styles";
import authStore from "../stores/authStore";

export default function App({ navigation }) {
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  // });

  // const textInputChage = (val) => {
  //   if (val.leng !== 0) {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };

  const { control, handleSubmit, errors, getValues } = useForm();
  const usernameInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const phonenumberInputRef = React.useRef();

  const onSubmit = async (user) => {
    await authStore.signin(user);
    navigation.navigate("Home");
    const loggedinUser = authStore.user;
    console.log("from sign in>>", loggedinUser);
  };

  return (
    <View style={styles.container1}>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 30,
            marginTop: 20,
          }}
        >
          Re Use
        </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text
            style={{
              color: "#009387",
              fontSize: 30,
              // marginBottom: 50,
              marginTop: 35,
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
        </View>
        <Text style={[styles.text_footer, { marginTop: 60 }]}>Username</Text>
        <View style={styles.action}>
          <Icon
            name="user-o"
            type="FontAwesome"
            style={{ color: "#009387", fontSize: 20 }}
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
                placeholder="USERNAME"
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
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
        <View style={styles.action}>
          <Icon
            name="lock"
            type="FontAwesome"
            style={{ color: "#009387", fontSize: 20 }}
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
        <View
          style={{
            position: "absolute",
            bottom: 18,
            right: 130,
          }}
        >
          <Button
            style={[styles.button, { backgroundColor: "#009387" }]}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
          </Button>
          <Button
            style={[
              styles.button,
              {
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#009387",
              },
            ]}
            onPress={() => navigation.navigate("SignUpHook")}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>Sign Up</Text>
          </Button>
        </View>
      </View>
      {/* <View>
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

      {errors.username && <Text>Incorrect Username. Sticky fingers?</Text>}

      <View>
        <Text style={styles.label}>Password</Text>
        <Controller
          name="password"
          //   type={password}
          defaultValue=""
          control={control}
          type="password"
          rules={{
            required: { value: true, message: "Password is required." },
            pattern: {
              // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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

      {getValues("password") === "" && (
        <Text>Oops you forgot your password.</Text>
      )}

      {errors.password && getValues("password") !== "" && (
        <Text>Incorrect Password</Text>
      )}

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View> */}
    </View>
  );
}
const { height } = Dimensions.get("screen");
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
    marginTop: 10,
    width: 150,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#009387",
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
    // paddingBottom: -100,
    // paddingHorizontal: 20,
    marginBottom: -160,
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
    color: "#009387",
    fontSize: 18,
    fontWeight: "400",
  },
  text_header: {
    color: "#009387",
    fontWeight: "bold",
    fontSize: 5,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

// const firstNameInputRef = React.useRef();
// const lastNameInputRef = React.useRef();
// <View>
//         <Text style={styles.label}>First Name</Text>
//         <Controller
//           name="firstName"
//           defaultValue=""
//           control={control}
//           rules={{ required: "This is required." }}
//           onFocus={() => {
//             firstNameInputRef.current.focus();
//           }}
//           render={({ onChange, onBlur, value }) => (
//             <TextInput
//               style={styles.input}
//               ref={firstNameInputRef}
//               onBlur={onBlur}
//               onChangeText={(value) => onChange(value)}
//               value={value}
//             />
//           )}
//         />
//       </View>

//       {errors.firstName && <Text>This is required.</Text>}

//       <View>
//         <Text style={styles.label}>Last Name</Text>
//         <Controller
//           name="lastName"
//           defaultValue=""
//           control={control}
//           rules={{ required: "This is required." }}
//           onFocus={() => {
//             firstNameInputRef.current.focus();
//           }}
//           render={({ onChange, onBlur, value }) => (
//             <TextInput
//               style={styles.input}
//               ref={lastNameInputRef}
//               onBlur={onBlur}
//               onChangeText={(value) => onChange(value)}
//               value={value}
//             />
//           )}
//         />
//       </View>

//       {errors.lastName && <Text>This is required.</Text>}

{
  /* <View>
        <Text style={styles.label}>Password</Text>
        <Controller
          name="password"
          //   type={password}
          defaultValue=""
          control={control}
          type="password"
          rules={{
            required: { value: true, message: "Password is required." },
            pattern: {
              // value: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
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
              secureTextEntry={true}
            />
          )}
        />
      </View> */
}
