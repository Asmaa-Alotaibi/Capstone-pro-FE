import { observer } from "mobx-react";
import {
  Body,
  Card,
  CardItem,
  Content,
  Left,
  ListItem,
  Text,
  Thumbnail,
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import profileImage from "../../img/profileImage.jpg";

const ProfileItem = ({ profile, navigation }) => {
  return (
    <ListItem>
      <Content>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProfilePage", { profile: profile })
          }
        >
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={profile.image ? { uri: profile.image } : profileImage}
                />
                <Body>
                  <Text>{profile.user.username}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </Content>
    </ListItem>
  );
};
export default observer(ProfileItem);
