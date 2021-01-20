import { Icon } from "native-base";
import React from "react";
import itemStore from "../../stores/itemStore";

const DeleteButton = ({ itemId, navigation }) => {
  const handleDelete = () => {
    itemStore.deleteItem(itemId);
    navigation.replace("NewItemList");
  };

  return (
    <Icon
      onPress={handleDelete}
      name="trash"
      color="red"
      style={{
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

export default DeleteButton;
