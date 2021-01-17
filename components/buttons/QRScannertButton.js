import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import React from "react";

const QRScannertButton = () => {
  const navigation = useNavigation();

  return (
    <Icon
      onPress={() => navigation.navigate("QRScanner")}
      name="qrcode-scan"
      type="MaterialCommunityIcons"
      style={{ marginRight: 20, fontSize: 40 }}
    />
  );
};

export default QRScannertButton;
