import React, { useState } from "react";
import { Container, Content, List, Spinner } from "native-base";
import profileStore from "../../stores/profileStore";
import ProfileItem from "./ProfileItem";
import { observer } from "mobx-react";
import SearchBarr from "../SearchBarr";

const ProfileList = ({ navigation }) => {
  const [query, setQuery] = useState("");

  if (profileStore.loading) return <Spinner />;
  console.log(profileStore.profiles);
  const profileList = profileStore.profiles
    .filter((profile) =>
      profile.user.username.toLowerCase().includes(query.toLowerCase())
    )
    .map((profile) => (
      <ProfileItem profile={profile} key={profile.id} navigation={navigation} />
    ));

  // you don't need the fragments
  return (
    <>
      <Content>
        <SearchBarr setQuery={setQuery} query={query} />
        <List>{profileList}</List>
      </Content>
      ]{" "}
    </>
  );
};
export default observer(ProfileList);
