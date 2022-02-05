import React from "react";
import { SmallDashedLine } from "../../../icons";
import {
  Container,
  List,
  InnerList,
  Item,
  InnerItem,
  Text,
  Title,
  HR,
} from "./styles/track-cargo-user-info";

function TrackCargoUserInfo({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

TrackCargoUserInfo.List = function TrackCargoUserInfoList({
  children,
  ...rest
}) {
  return <List {...rest}>{children}</List>;
};

TrackCargoUserInfo.InnerList = function TrackCargoUserInfoInnerList({
  children,
  ...rest
}) {
  return <InnerList {...rest}>{children}</InnerList>;
};

TrackCargoUserInfo.Item = function TrackCargoUserInfoItem({
  children,
  ...rest
}) {
  return <Item {...rest}>{children}</Item>;
};

TrackCargoUserInfo.InnerItem = function TrackCargoUserInfoInnerItem({
  children,
  ...rest
}) {
  return <InnerItem {...rest}>{children}</InnerItem>;
};

TrackCargoUserInfo.Title = function TrackCargoUserInfoTitle({
  children,
  ...rest
}) {
  return <Title {...rest}>{children}</Title>;
};

TrackCargoUserInfo.Text = function TrackCargoUserInfoText({
  children,
  ...rest
}) {
  return <Text {...rest}>{children}</Text>;
};

TrackCargoUserInfo.HR = function TrackCargoUserInfoHR({ ...rest }) {
  return <HR {...rest} />;
};

export default TrackCargoUserInfo;
