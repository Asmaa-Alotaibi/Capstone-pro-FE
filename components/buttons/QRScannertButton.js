import { Icon } from "native-base";
import React from "react";

const QRScannertButton = ({ navigation, item }) => {
  console.log("TCL: QRScannertButton -> item", item);

  return (
    <Icon
      onPress={() => navigation.navigate("QRScanner", { item: item })}
      name="qrcode-scan"
      type="MaterialCommunityIcons"
      style={{ marginLeft: 40, marginRight: 10, fontSize: 30 }}
    />
  );
};

export default QRScannertButton;
