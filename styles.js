import { Card, Text, CardItem, Tab, View, Content } from "native-base";
import styled from "styled-components";

export const Containerr = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 280px;
  padding-top: 50px;
  margin-left: 10px;
`;

export const Product = styled.View`
  width: 50%;
  height: 35%;
  border-radius: 16px;
  padding-bottom: 20px;
  padding-right: 4px;
`;

export const ProfileCard = styled(Card)`
  flex: 1;
  background-color: transparent;
  width: 100.32%;
  margin-left: -0.75px;
`;

export const ProfileUserName = styled(Text)`
  font-size: 25px;
  margin-bottom: -10px;
`;
export const ProfileFirstName = styled(Text)`
  font-size: 20px;
`;
export const ProfileLastName = styled(Text)`
  font-size: 20px;
  margin-left: 4px;
`;
export const ProfileItems = styled(Text)`
  text-align: center;
  font-size: 20px;
  margin-right: 40px;
  color: gray;
`;

export const ProfileCardItem = styled(CardItem)`
  background-color: transparent;
`;
export const ProfileItemList = styled(CardItem)`
  background-color: transparent;
  width: 112%;
  margin-left: -33px;
  height: 120%;
`;
export const ProfileTab = styled(Tab)`
  width: 100%;
`;

export const ItemCard = styled.View`
  flex: 1;
  background-color: transparent;
  border-color: transparent;
`;
export const ItemCardItem = styled(CardItem)`
  width: 109%;
  height: 100%;
  background-color: transparent;
  margin-top: -10px;
  margin-left: -18px;
  margin-bottom: -30px;
`;
export const ItemName = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const ItemImage = styled.Image`
  height: 300px;
  width: 190px;
  flex: 1;
`;
export const ItemDetailCardItem = styled(CardItem)`
  width: 108%;
  height: 100%;
  background-color: transparent;
  margin-top: -10px;
  margin-left: -17px;
  margin-bottom: 50px;
`;

export const ItemDetailTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const ItemDetailImage = styled.Image`
  height: 400px;
  width: 98%;
  margin-left: 4px;
`;

export const ItemDescription = styled.Text`
  margin-top: 5px;
  font-size: 20px;
`;
