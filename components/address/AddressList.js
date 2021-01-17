import { Containerr } from "../../styles";
import React from "react";
import SingleAddress from "../SingleAddress";
import { Spinner } from "native-base";
import addressStore from "../../stores/addressStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const AddressList = ({ userId, navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (addressStore.loading) return <Spinner />;
  const addressList = addressStore.addresses
    .filter((address) => address.userId === userId) //change to address.profileId
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
