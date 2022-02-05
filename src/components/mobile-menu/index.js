import React from "react";
import { Portal } from "../../helpers";
import {
  Box,
  Button,
  ButtonAction,
  Container,
  Item,
  List,
  Nav,
  SearchBox,
  SearchBoxContainer,
  ButtonLink,
  ButtonText,
  IconContainer,
} from "./styles/mobile-menu";

function MobileMenu({ children, ...rest }) {
  return (
    <Portal>
      <Container {...rest}>{children}</Container>
    </Portal>
  );
}

MobileMenu.Nav = function MobileMenuNav({ children, ...rest }) {
  return <Nav {...rest}>{children}</Nav>;
};

MobileMenu.List = function MobileMenuList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

MobileMenu.Item = function MobileMenuItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

MobileMenu.Box = function MobileMenuBox({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
};

MobileMenu.ButtonLink = function MobileMenuButtonLink({
  children,
  to,
  ...rest
}) {
  return (
    <ButtonLink to={to} {...rest}>
      {children}
    </ButtonLink>
  );
};

MobileMenu.ButtonText = function MobileMenuButtonText({ children, ...rest }) {
  return <ButtonText {...rest}>{children}</ButtonText>;
};

MobileMenu.IconContainer = function MobileMenuIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

MobileMenu.SearchBoxContainer = function MobileMenuSearchBoxContainer({
  children,
  ...rest
}) {
  return <SearchBoxContainer {...rest}>{children}</SearchBoxContainer>;
};

MobileMenu.SearchBox = function MobileMenuSearchBox({
  children,
  value,
  ...rest
}) {
  return <SearchBox type="searchbox" value={value} {...rest} />;
};

MobileMenu.ButtonAction = function MobileMenuButtonAction({
  children,
  ...rest
}) {
  return <ButtonAction {...rest}>{children}</ButtonAction>;
};

MobileMenu.Button = function MobileMenuButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

export default MobileMenu;
