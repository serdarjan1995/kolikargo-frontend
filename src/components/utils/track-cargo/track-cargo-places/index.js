import React from "react";
import {
  Container,
  List,
  Item,
  Text,
  Circle,
  InnerCircle,
  HR,
} from "./styles/track-cargo-places";

function TrackCargoPlaces({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

TrackCargoPlaces.List = function TrackCargoPlacesList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

TrackCargoPlaces.Item = function TrackCargoPlacesItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

TrackCargoPlaces.Text = function TrackCargoPlacesText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

TrackCargoPlaces.Circle = function TrackCargoPlacesCircle({
  children,
  ...rest
}) {
  return (
    <Circle {...rest}>
      {children}
      <InnerCircle />
    </Circle>
  );
};

TrackCargoPlaces.HR = function TrackCargoPlacesHR({ ...rest }) {
  return <HR {...rest} />;
};

export default TrackCargoPlaces;
