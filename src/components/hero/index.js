import React from "react";
import {
  Container,
  ButtonLink,
  ContentWrapper,
  Text,
  Title,
} from "./styles/hero";

function Hero({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Hero.ContentWrapper = function HeroContentWrapper({ children, ...rest }) {
  return <ContentWrapper {...rest}>{children}</ContentWrapper>;
};

Hero.Title = function HeroTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Hero.Text = function HeroText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Hero.ButtonLink = function HeroButtonLink({ children, ...rest }) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

export default Hero;
