import React from "react";
import {
  Container,
  Row,
  Col,
  LeftCol,
  RightCol,
  List,
  Item,
  ListTitle,
  InputTitle,
  InputContainer,
  Input,
  ButtonLink,
  ImgContainer,
  Logo,
  SocialContainer,
  SocialLink,
  IconContainer,
  Copyright,
  CopyrightMobile,
  SubscriptionContainer,
  HR,
  ListContainer
} from "./styles/footer";

function Footer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Footer.Col = function FooterCol({ children, ...rest }) {
  return <Col {...rest}>{children}</Col>;
};

Footer.Row = function FooterRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Footer.LeftCol = function FooterLeftCol({ children, ...rest }) {
  return <LeftCol {...rest}>{children}</LeftCol>;
};

Footer.RightCol = function FooterRightRow({ children, ...rest }) {
  return <RightCol {...rest}>{children}</RightCol>;
};

Footer.List = function FooterList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Footer.ListTitle = function FooterListTitle({ children, ...rest }) {
  return <ListTitle {...rest}>{children}</ListTitle>;
};

Footer.Item = function FooterItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Footer.SubscriptionContainer = function FooterSubscriptionContainer({
  children,
  ...rest
}) {
  return <SubscriptionContainer {...rest}>{children}</SubscriptionContainer>;
};

Footer.InputTitle = function FooterInputTitle({ children, ...rest }) {
  return <InputTitle {...rest}>{children}</InputTitle>;
};

Footer.InputContainer = function FooterInputContainer({ children, ...rest }) {
  return <InputContainer {...rest}>{children}</InputContainer>;
};

Footer.Input = function FooterInput({ ...rest }) {
  return <Input {...rest} />;
};

Footer.HR = function FooterHR({ children, ...rest }) {
  return <HR {...rest} />;
};

Footer.ButtonLink = function FooterButtonLink({ children, ...rest }) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

Footer.ImgContainer = function FooterImgContainer({ children, ...rest }) {
  return <ImgContainer {...rest}>{children}</ImgContainer>;
};

Footer.Logo = function FooterLogo({ src, alt, ...rest }) {
  return <Logo src={src} alt={alt} {...rest} />;
};

Footer.SocialContainer = function FooterSocialContainer({ children, ...rest }) {
  return <SocialContainer {...rest}>{children}</SocialContainer>;
};

Footer.ListContainer = function FooterListContainer({ children, ...rest }) {
  return <ListContainer {...rest}>{children}</ListContainer>;
};

Footer.SocialLink = function FooterSocialLink({ children, ...rest }) {
  return <SocialLink {...rest}>{children}</SocialLink>;
};

Footer.IconContainer = function FooterIconContainer({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Footer.Copyright = function FooterCopyright({ children, ...rest }) {
  return <Copyright {...rest}>{children}</Copyright>;
};

Footer.CopyrightMobile = function FooterCopyrightMobile({ children, ...rest }) {
  return <CopyrightMobile {...rest}>{children}</CopyrightMobile>;
};

export default Footer;
