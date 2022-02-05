import React from "react";
import {
  Container,
  ButtonLink,
  IconContainer,
  Img,
  Text,
  Title,
} from "./styles/track-cargo-action-card";

function TrackCargoActionCard({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

TrackCargoActionCard.Title = function TrackCargoActionCardTitle({
  children,
  ...rest
}) {
  return <Title {...rest}>{children}</Title>;
};

TrackCargoActionCard.ButtonLink = function TrackCargoActionCardButtonLink({
  children,
  ...rest
}) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

TrackCargoActionCard.IconContainer = function TrackCargoActionCardIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

TrackCargoActionCard.Img = function TrackCargoActionCardImg({
  children,
  ...rest
}) {
  return <Img {...rest} />;
};

TrackCargoActionCard.Text = function TrackCargoActionCardText({
  children,
  ...rest
}) {
  return <Text {...rest}>{children}</Text>;
};

export default TrackCargoActionCard;

