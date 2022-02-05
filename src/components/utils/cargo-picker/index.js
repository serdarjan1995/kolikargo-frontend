import React from "react";
import {
  Button,
  ContentWrapper,
  Text,
  Title,
  Box,
  IconContainer,
  ButtonMobile,
  TitleContainer,
  ButtonSmall,
  Container,
  Input,
  ContentInnerWrapper,
} from "./styles/cargo-picker";

function CargoPicker({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CargoPicker.ContentWrapper = React.forwardRef(({ children, ...rest }, ref) => {
  return <ContentWrapper ref={ref} {...rest}>{children}</ContentWrapper>;
});

CargoPicker.Box = function CargoPickerBox({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
};

CargoPicker.IconContainer = function CargoPickerIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

CargoPicker.ContentInnerWrapper = function CargoPickerContentInnerWrapper({
  children,
  ...rest
}) {
  return <ContentInnerWrapper {...rest}>{children}</ContentInnerWrapper>;
};

CargoPicker.ContentWrapper = function CargoPickerContentWrapper({
  children,
  ...rest
}) {
  return <ContentWrapper {...rest}>{children}</ContentWrapper>;
};

CargoPicker.TitleContainer = function CargoPickerTitleContainer({
  children,
  ...rest
}) {
  return <TitleContainer {...rest}>{children}</TitleContainer>;
};

CargoPicker.Title = function CargoPickerTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

CargoPicker.Text = function CargoPickerText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

CargoPicker.Input = function CargoPickerInput({ children, ...rest }) {
  return <Input {...rest}>{children}</Input>;
};

CargoPicker.Button = function CargoPickerButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

CargoPicker.ButtonSmall = function CargoPickerButtonSmall({
  children,
  ...rest
}) {
  return <ButtonSmall {...rest}>{children}</ButtonSmall>;
};

CargoPicker.ButtonMobile = function CargoPickerButtonMobile({
  children,
  ...rest
}) {
  return <ButtonMobile {...rest}>{children}</ButtonMobile>;
};

export default CargoPicker;
