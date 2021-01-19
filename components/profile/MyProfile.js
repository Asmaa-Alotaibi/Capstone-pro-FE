import React from "react";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import Signin from "../Signin";
import ProfilePage from "./ProfilePage";
import { observer } from "mobx-react";

const MyProfile = ({ navigation }) => {
  const profile = profileStore.getProfileByUserId(authStore.user.id);
  return (
    <>
      <ProfilePage Myprofile={profile} navigation={navigation} />
    </>
  );
};

export default observer(MyProfile);
