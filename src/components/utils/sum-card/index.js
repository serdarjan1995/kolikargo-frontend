import React from "react";
import {
  Container,
  CompanyName,
  Img,
  ImgContainer,
  Info,
  InfoContainer,
  PriceRow,
  PriceTitle,
  Text,
  TextSmall,
} from "./styles/sum-card";

function SumCard({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

SumCard.ImgContainer = function SumCardImgContainer({ children, ...rest }) {
  return <ImgContainer {...rest}>{children}</ImgContainer>;
};

SumCard.Img = function SumCardImg({ ...rest }) {
  return <Img {...rest} />;
};

SumCard.CompanyName = function SumCardCompanyName({ children, ...rest }) {
  return <CompanyName {...rest}>{children}</CompanyName>;
};

SumCard.Text = function SumCardText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

SumCard.TextSmall = function SumCardTextSmall({ children, ...rest }) {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

SumCard.InfoContainer = function SumCardInfoContainer({ children, ...rest }) {
  return <InfoContainer {...rest}>{children}</InfoContainer>;
};

SumCard.Info = function SumCardInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

SumCard.PriceTitle = function SumCardPriceTitle({ children, ...rest }) {
  return <PriceTitle {...rest}>{children}</PriceTitle>;
};

SumCard.PriceRow = function SumCardPriceRow({ children, ...rest }) {
  return <PriceRow {...rest}>{children}</PriceRow>;
};

export default SumCard;
