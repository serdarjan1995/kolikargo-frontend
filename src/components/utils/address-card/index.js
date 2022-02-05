import React from "react";
import { Container, Grid, Title, Text, Button } from "./styles/address-card";

function AddressCard({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default AddressCard;

AddressCard.Title = function AddressCardTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

AddressCard.Text = function AddressCardText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

AddressCard.Button = function AddressCardButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

AddressCard.Grid = function AddressCardGrid({ children, ...rest }) {
  return <Grid {...rest}>{children}</Grid>;
};
