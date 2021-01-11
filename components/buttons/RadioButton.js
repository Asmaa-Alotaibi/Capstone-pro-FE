import React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const RadioButton = () => {
  return (
    <RadioButtonRN
      data={data}
      selectedBtn={(e) => console.log(e)}
      icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
    />
  );
};

export default RadioButton;
