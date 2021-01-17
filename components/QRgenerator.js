import React, { useRef } from "react";
import QRCode from "react-native-qrcode-svg";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Share,
  Alert,
} from "react-native";

const QRgenerator = ({ randomValue }) => {
  console.log("TCL: App -> randomInputValue", randomValue);
  let myQRCode = useRef();

  const shareQRCode = () => {
    myQRCode.toDataURL((dataURL) => {
      console.log(dataURL);
      let shareImageBase64 = {
        title: "React Native",
        url: `data:image/png;base64,${dataURL}`,
        subject: "Share Link", //  for email
      };
      Share.share(shareImageBase64).catch((error) => console.log(error));
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Your QR Code ..</Text>
        <QRCode
          getRef={(ref) => (myQRCode = ref)}
          value={randomValue}
          size={250}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={shareQRCode}>
          <Text style={styles.buttonTextStyle}>Share QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Alert.alert("well Done")}
        >
          <Text style={styles.buttonTextStyle}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QRgenerator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#51D8C7",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#51D8C7",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
