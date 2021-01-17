import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import DropDownPicker from "react-native-dropdown-picker";
import React from "react";
import addressStore from "../../stores/addressStore";

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

export default function App() {
  const { control, handleSubmit, errors, getValues } = useForm();
  const governorateInputRef = React.useRef();
  const cityInputRef = React.useRef();
  const blockInputRef = React.useRef();
  const avenueInputRef = React.useRef();
  const streetInputRef = React.useRef();
  const houseInputRef = React.useRef();
  const flatInputRef = React.useRef();

  const onSubmit = async (address, { navigation }) => {
    console.log(address);
    await addressStore.createAddresses(address);
    const newAddress = addressStore.address;
    console.log("from fetchaddresses>>", newAddress);
    navigation.navigate("MyProfile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownview}>
        <DropDownPicker
          items={areas}
          defaultValue={addressStore.addresses.city}
          containerStyle={styles.cities}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{ justifyContent: "flex-center" }}
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

      <View>
        <Text style={styles.label}>block</Text>
        <Controller
          name="block"
          defaultValue=""
          control={control}
          rules={{ required: "Block is required." }}
          onFocus={() => {
            blockInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={blockInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

      {errors.block && <Text>This field is required.</Text>}

      <View>
        <Text style={styles.label}>Avenue</Text>
        <Controller
          name="avenue"
          defaultValue=""
          control={control}
          onFocus={() => {
            avenueInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={avenueInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

      <View>
        <Text style={styles.label}>Street</Text>
        <Controller
          name="street"
          defaultValue=""
          control={control}
          onFocus={() => {
            streetInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={streetInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

      <View>
        <Text style={styles.label}>House</Text>
        <Controller
          name="house"
          defaultValue=""
          control={control}
          onFocus={() => {
            houseInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={houseInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

      <View>
        <Text style={styles.label}>Flat</Text>
        <Controller
          name="flat"
          defaultValue=""
          control={control}
          onFocus={() => {
            flatInputRef.current.focus();
          }}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              ref={flatInputRef}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
      </View>

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
  dropdownview: {
    zIndex: 100,
  },
});
