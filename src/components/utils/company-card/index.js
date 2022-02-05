import React from "react";
import {
  ActionButtonLink,
  Box,
  Container,
  HR,
  Img,
  ImgContainer,
  ShareButton,
  ShortInfoContainer,
  Text,
  TextSmall,
  Title,
  TopContainer,
  IconContainer,

} from "./styles/company-card";

function CompanyCard({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CompanyCard.TopContainer = function CompanyCardTopContainer({
  children,
  ...rest
}) {
  return <TopContainer {...rest}>{children}</TopContainer>;
};

CompanyCard.ImgContainer = function CompanyCardImgContainer({
  children,
  ...rest
}) {
  return <ImgContainer {...rest}>{children}</ImgContainer>;
};

CompanyCard.IconContainer = function CompanyCardIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

CompanyCard.Img = function CompanyCardImg({ children, ...rest }) {
  return <Img {...rest} />;
};

CompanyCard.ShortInfoContainer = function CompanyCardShortInfoContainer({
  children,
  ...rest
}) {
  return <ShortInfoContainer {...rest}>{children}</ShortInfoContainer>;
};

CompanyCard.Box = function CompanyCardBox({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
};

CompanyCard.ShareButton = function CompanyCardShareButton({
  children,
  ...rest
}) {
  return <ShareButton {...rest}>{children}</ShareButton>;
};

CompanyCard.ActionButtonLink = function CompanyCardActionButtonLink({
  children,
  ...rest
}) {
  return <ActionButtonLink {...rest}>{children}</ActionButtonLink>;
};

CompanyCard.Text = function CompanyCardText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

CompanyCard.TextSmall = function CompanyCardTextSmall({ children, ...rest }) {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

CompanyCard.Title = function CompanyCardTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

CompanyCard.HR = function CompanyCardHR({ children, ...rest }) {
  return <HR {...rest} />;
};

export default CompanyCard;
