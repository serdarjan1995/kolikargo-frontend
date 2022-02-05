import React from "react";
import {
  Container,
  Title,
  Text,
  TextBold,
  IconContainer,
  List,
  Item,
} from "./styles/about-company";

function AboutCompany({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AboutCompany.Title = function AboutCompanyTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

AboutCompany.Text = function AboutCompanyText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

AboutCompany.TextBold = function AboutCompanyTextBold({ children, ...rest }) {
  return <TextBold {...rest}>{children}</TextBold>;
};

AboutCompany.IconContainer = function AboutCompanyIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

AboutCompany.List = function AboutCompanyList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

AboutCompany.Item = function AboutCompanyItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

export default AboutCompany;
