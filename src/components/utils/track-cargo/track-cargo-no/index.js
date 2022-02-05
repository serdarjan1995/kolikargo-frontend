import React from "react";
import {
  Container,
  Text,
  Title,
  InputContainer,
  Input,
  Button,
} from "./styles/track-cargo-no";

function TrackCargoNo({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

TrackCargoNo.Title = function TrackCargoNoTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

TrackCargoNo.Text = function TrackCargoNoText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

TrackCargoNo.InputContainer = function TrackCargoNoInputContainer({
  children,
  ...rest
}) {
  return <InputContainer {...rest}>{children}</InputContainer>;
};

TrackCargoNo.Button = function TrackCargoNoButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

TrackCargoNo.Input = function TrackCargoNoInput({ ...rest }) {
  return <Input {...rest} />;
};

export default TrackCargoNo;
