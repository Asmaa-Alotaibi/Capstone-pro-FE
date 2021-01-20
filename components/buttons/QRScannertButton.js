import { Icon } from "native-base";
import React from "react";

const QRScannertButton = ({ navigation, item }) => {
  console.log("TCL: QRScannertButton -> item", item);

  return (
    <Icon
      onPress={() => navigation.navigate("QRScanner", { item: item })}
      name="qrcode-scan"
      type="MaterialCommunityIcons"
      style={{
        marginLeft: 40,
        fontSize: 30,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
      }}
    />
  );
};

export default QRScannertButton;
