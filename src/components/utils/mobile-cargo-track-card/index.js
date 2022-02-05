import React from "react";
import {
  Container,
  ButtonLink,
  Title,
  Text,
} from "./styles/mobile-cargo-track-card";

function MobileCargoTrackCard({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

MobileCargoTrackCard.ButtonLink = function MobileCargoTrackCardButtonLink({
  children,
  ...rest
}) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

MobileCargoTrackCard.Title = function MobileCargoTrackCardTitle({
  children,
  ...rest
}) {
  return <Title {...rest}>{children}</Title>;
};

MobileCargoTrackCard.Text = function MobileCargoTrackCardText({
  children,
  ...rest
}) {
  return <Text {...rest}>{children}</Text>;
};

export default MobileCargoTrackCard;
