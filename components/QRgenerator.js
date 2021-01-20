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
import { observer } from "mobx-react";

const QRgenerator = ({ RQValue }) => {
  let myQRCode = useRef();

  const shareQRCode = () => {
    myQRCode.toDataURL((dataURL) => {
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
        <View
          style={{
            marginTop: -30,
            flex: 0.8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Text style={styles.titleStyle}>Your QR Code ..</Text>
          <QRCode
            getRef={(ref) => (myQRCode = ref)}
            value={JSON.stringify(RQValue)}
            size={250}
            color="black"
            backgroundColor="white"
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="yellow"
          />
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={shareQRCode}>
          <Text style={styles.buttonTextStyle}>Share QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default observer(QRgenerator);
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
    fontSize: 17,
    textAlign: "center",
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
    margin: 10,
  },
  buttonStyle: {
    // width: 100,
    // height: 60,
    backgroundColor: "#009387",
    borderWidth: 0,
    color: "#FFFFFF",
    // borderColor: "#51D8C7",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
