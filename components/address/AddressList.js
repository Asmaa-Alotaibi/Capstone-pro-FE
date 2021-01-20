import { Containerr } from "../../styles";
import React from "react";
import SingleAddress from "../SingleAddress";
import { Spinner } from "native-base";
import addressStore from "../../stores/addressStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const AddressList = ({ route, navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (addressStore.loading) return <Spinner />;
  const { userId } = route.params;
  const addressList = addressStore.addresses
    .filter((address) => address.profileId === userId)
    .map((address) => (
      <SingleAddress
        address={address}
        key={address.id}
        navigation={navigation}
      />
    ));
  console.log(addressList, "from Address List");
  return <Containerr>{addressList}</Containerr>;
};
export default observer(AddressList);
