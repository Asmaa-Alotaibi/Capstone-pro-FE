import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import React from "react";
import authStore from "../stores/authStore";
import { EyeButtonStyled } from "../styles";

export default function App() {
  const { control, handleSubmit, errors, getValues } = useForm();
  const usernameInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const phonenumberInputRef = React.useRef();

  const onSubmit = async (user) => {
    console.log(user);
    await authStore.signin(user);
    const loggedinUser = authStore.user;
    console.log("from sign in>>", loggedinUser);
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

      {errors.username && <Text>Incorrect Username. Sticky fingers?</Text>}

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
      </View>
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
