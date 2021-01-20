import { observer } from "mobx-react";
import { Content, Spinner } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import authStore from "../../stores/authStore";
import itemStore from "../../stores/itemStore";
import RequestedItemList from "../item/RequestedItemList";

const DriverHomePage = () => {
  if (itemStore.loading) return <Spinner />;
  const driver = authStore.user;

  const deliveredItems = itemStore.items.filter(
    (item) => item.driverId === driver.id && item.gone
  );
  const pendingItems = itemStore.items.filter(
    (item) => item.driverId === driver.id && !item.gone
  );
  const requested = itemStore.items.filter(
    (item) => item.driverId === driver.id
  );
  return (
    <Content style={{ backgroundColor: "white" }}>
      <Text style={styles.username}>Hello, {driver.username}</Text>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.numberD}>{deliveredItems.length}</Text>
          <Text style={styles.text}>Delivered</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.numberP}>{pendingItems.length}</Text>
          <Text style={styles.text}>Pending</Text>
        </View>
      </View>
      {requested.length === 0 ? (
        <View style={styles.noteBox}>
          <Text style={styles.note}>
            You have no item in your delivery list
          </Text>
        </View>
      ) : (
        <View style={styles.list}>
          <RequestedItemList items={requested} />
        </View>
      )}
    </Content>
  );
};

export default observer(DriverHomePage);
const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 180,
    width: 180,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: 10,
  },
  numberD: {
    fontSize: 30,
    color: "#009387",
  },
  numberP: {
    fontSize: 30,
    color: "tomato",
  },
  text: {
    fontSize: 20,
  },
  username: {
    fontSize: 35,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  list: {
    height: 520,
    width: 392,
    margin: 12,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignContent: "center",
  },
  note: {
    fontSize: 30,
    textAlign: "center",
  },
  noteBox: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 520,
    width: 392,
    margin: 12,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
