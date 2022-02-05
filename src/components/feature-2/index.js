import React from "react";
import {
  Container,
  Background,
  Img,
  Item,
  List,
  Text,
  Title,
  TitleAlt,
  TitleSmall,
  DashLineContainer,
  DashLineSmallContainer,
} from "./styles/feature-2";

function Feature2({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Feature2.Title = function FeatureTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Feature2.Background = function FeatureBackground({ children, ...rest }) {
  return <Background {...rest}>{children}</Background>;
};

Feature2.TitleAlt = function FeatureTitleAlt({ children, ...rest }) {
  return <TitleAlt {...rest}>{children}</TitleAlt>;
};

Feature2.List = function FeatureList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Feature2.Item = function FeatureItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Feature2.TitleSmall = function FeatureTitleSmall({ children, ...rest }) {
  return <TitleSmall {...rest}>{children}</TitleSmall>;
};

Feature2.Img = function FeatureImg({ children, src, alt, ...rest }) {
  return <Img src={src} alt={alt} {...rest} />;
};

Feature2.Text = function FeatureText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Feature2.DashLineContainer = function FeatureDashLineContainer({
  children,
  ...rest
}) {
  return <DashLineContainer {...rest}>{children}</DashLineContainer>;
};

Feature2.DashLineSmallContainer = function FeatureDashLineSmallContainer({
  children,
  ...rest
}) {
  return <DashLineSmallContainer {...rest}>{children}</DashLineSmallContainer>;
};

export default Feature2;
