import React from "react";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ItemCardItem, ItemImage, ItemName, Product } from "../../styles";
import profileImg from "../../img/profileImage.jpg"; // not being used, remove it
const Item = ({ item, navigation }) => {
  if (profileStore.loading) return <Spinner />;
  const profile = profileStore.getProfileByUserId(item.ownerId); // not being used, remove it

  return (
    <>
      <Product>
        <TouchableOpacity
          onPress={() => navigation.navigate("ItemDetail", { item: item })}
        >
          <ItemCardItem>
            <ItemName>{item.title}</ItemName>

            <ItemImage
              source={{
                uri: item.image,
              }}
            />
          </ItemCardItem>
        </TouchableOpacity>
      </Product>
    </>
  );
};
export default observer(Item);
