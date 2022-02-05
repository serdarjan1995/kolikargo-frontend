import React from "react";
import {
  Container,
  Img,
  Item,
  List,
  Text,
  Title,
  TitleAlt,
  TitleSmall,
} from "./styles/feature";

function Feature({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Feature.TitleAlt = function FeatureTitleAlt({ children, ...rest }) {
  return <TitleAlt {...rest}>{children}</TitleAlt>;
};

Feature.List = function FeatureList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Feature.Item = function FeatureItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Feature.TitleSmall = function FeatureTitleSmall({ children, ...rest }) {
  return <TitleSmall {...rest}>{children}</TitleSmall>;
};

Feature.Img = function FeatureImg({ children,src,alt, ...rest }) {
  return <Img src={src} alt={alt} {...rest} />;
};

Feature.Text = function FeatureText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

export default Feature;
