import React from "react";
import {
  Container,
  Text,
  No,
  Button,
} from "./styles/track-number-display";

function TrackNumberDisplay({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

TrackNumberDisplay.Text = function TrackNumberDisplayText({
  children,
  ...rest
}) {
  return <Text {...rest}>{children}</Text>;
};

TrackNumberDisplay.No = function TrackNumberDisplayNo({ children, ...rest }) {
  return <No {...rest}>{children}</No>;
};

TrackNumberDisplay.Button = function TrackNumberDisplayButton({
  children,
  ...rest
}) {
  return <Button {...rest}>{children}</Button>;
};

export default TrackNumberDisplay;
