import React from "react";
import { Container, IconContainer, Title, Text, Link } from "./styles/info";

function Info({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Info.IconContainer = function InfoIconContainer({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Info.Title = function InfoTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Info.Text = function InfoText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Info.Link = function InfoLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

export default Info;
