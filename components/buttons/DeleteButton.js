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
      style={{ marginRight: 5 }}
    />
  );
};

export default DeleteButton;
