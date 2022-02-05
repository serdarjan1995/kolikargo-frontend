import React from "react";
import {
  Container,
  List,
  Item,
  Text,
  TextSmall,
  Title,
  TitleSmall,
  Date,
  IconContainer,
  Line,
} from "./styles/track-cargo-status";

function TrackCargoStatus({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

TrackCargoStatus.List = function TrackCargoStatusList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

TrackCargoStatus.Item = function TrackCargoStatusItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

TrackCargoStatus.Text = function TrackCargoStatusText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

TrackCargoStatus.TextSmall = function TrackCargoStatusTextSmall({
  children,
  ...rest
}) {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

TrackCargoStatus.Title = function TrackCargoStatusTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

TrackCargoStatus.TitleSmall = function TrackCargoStatusTitleSmall({
  children,
  ...rest
}) {
  return <TitleSmall {...rest}>{children}</TitleSmall>;
};

TrackCargoStatus.Date = function TrackCargoStatusDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

TrackCargoStatus.IconContainer = function TrackCargoStatusIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

TrackCargoStatus.Line = function TrackCargoStatusLine({ children, ...rest }) {
  return <Line {...rest} />;
};

export default TrackCargoStatus;
