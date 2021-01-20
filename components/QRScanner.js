import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import itemStore from "../stores/itemStore";
import { showMessage } from "react-native-flash-message";

export default function QRScanner({ navigation, route }) {
  const { item } = route.params;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    match(data);
  };
  // matching QRcode between owner and recepient
  const match = (data) => {
    if (data === JSON.stringify(item.id)) {
      alert("Matched!");
      itemStore.gonetItem(item);
      showMessage({
        message: "Well done",
        description: `Your item is gone now :) !`,
        type: "default",
        backgroundColor: "#ff6b6b", // background color
        color: "black",
      });
      navigation.navigate("Home");
    } else {
      alert("UN-Matched!");
      navigation.navigate("Home");
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
