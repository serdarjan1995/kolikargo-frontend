import React from "react";
import {
  Background,
  Container,
  Img,
  ImgContainer,
  Info,
  InfoTitle,
  DescriptionContainer,
  Price,
  PriceContainer,
  PriceText,
  Title,
  TitleAlt,
  Grid,
  HR,
  Button,
  TabContainer,
  TabButton,
  Link,
} from "./styles/card";

function Card({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Card.ImgContainer = function CardImgContainer({ children, ...rest }) {
  return <ImgContainer {...rest}>{children}</ImgContainer>;
};

Card.Background = function CardBackground({ children, ...rest }) {
  return <Background {...rest}>{children}</Background>;
};

Card.Grid = function CardGrid({ children, ...rest }) {
  return <Grid {...rest}>{children}</Grid>;
};

Card.Link = function CardLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Card.Img = function CardImg({ ...rest }) {
  return <Img {...rest} />;
};

Card.Title = function CardTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Card.HR = function CardHR({ ...rest }) {
  return <HR {...rest} />;
};

Card.TitleAlt = function CardTitleAlt({ children, ...rest }) {
  return <TitleAlt {...rest}>{children}</TitleAlt>;
};

Card.PriceContainer = function CardPriceContainer({ children, ...rest }) {
  return <PriceContainer {...rest}>{children}</PriceContainer>;
};

Card.DescriptionContainer = function CardDescriptionContainer({
  children,
  ...rest
}) {
  return <DescriptionContainer {...rest}>{children}</DescriptionContainer>;
};

Card.Price = function CardPrice({ children, ...rest }) {
  return <Price {...rest}>{children}</Price>;
};

Card.PriceText = function CardPriceText({ children, ...rest }) {
  return <PriceText {...rest}>{children}</PriceText>;
};

Card.InfoTitle = function CardInfoTitle({ children, ...rest }) {
  return <InfoTitle {...rest}>{children}</InfoTitle>;
};

Card.Info = function CardInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Card.Button = function CardButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Card.TabContainer = function CardTabContainer({ children, ...rest }) {
  return <TabContainer {...rest}>{children}</TabContainer>;
};

Card.TabButton = function CardTabButton({ children, ...rest }) {
  return <TabButton {...rest}>{children}</TabButton>;
};

export default Card;
