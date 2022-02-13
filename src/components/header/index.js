import React from "react";
import {
  AvatarButton,
  AvatarImg,
  ButtonLink,
  Container,
  Searchbox,
  SearchboxContainer,
  Wrapper,
  Logo,
  PopoverButton,
  Popover,
  PopoverButtonTitle,
  PopoverToggleButton,
  IconContainer,
  LogoContainer,
  SearchboxButton,
  LoginButton,
} from "./styles/header";

function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Wrapper = function HeaderWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Header.Logo = function HeaderLogo({ ...rest }) {
  return <Logo {...rest} />;
};

Header.SearchboxContainer = function HeaderSearchBoxContainer({
  children,
  ...rest
}) {
  return <SearchboxContainer {...rest}>{children}</SearchboxContainer>;
};

Header.Searchbox = function HeaderSearchbox({ placeholder, ...rest }) {
  return <Searchbox type="search" placeholder={placeholder} {...rest} />;
};

Header.LogoContainer = function HeaderLogoContainer({ children, ...rest }) {
  return <LogoContainer {...rest}>{children}</LogoContainer>;
};

Header.SearchboxButton = function HeaderSearchboxButton({ children, ...rest }) {
  return <SearchboxButton {...rest}>{children}</SearchboxButton>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...rest }) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

Header.ProfileButton = function HeaderProfileButton({ children, ...rest }) {
  return <LoginButton {...rest}>{children}</LoginButton>;
};

Header.AvatarButton = function HeaderAvatarButton({ children, ...rest }) {
  return <AvatarButton {...rest}>{children}</AvatarButton>;
};

Header.AvatarImg = function HeaderAvatarImg({ src, alt, ...rest }) {
  return <AvatarImg src={src} alt={alt} {...rest} />;
};

Header.Popover = function HeaderPopover({ children, ...rest }) {
  return <Popover {...rest}>{children}</Popover>;
};

Header.PopoverButton = function HeaderPopoverButton({ children, ...rest }) {
  return <PopoverButton {...rest}>{children}</PopoverButton>;
};

Header.IconContainer = function HeaderIconContainer({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Header.PopoverToggleButton = function HeaderPopoverToggleButton({
  children,
  ...rest
}) {
  return <PopoverToggleButton {...rest}>{children}</PopoverToggleButton>;
};

Header.PopoverButtonTitle = function HeaderPopoverButtonTitle({
  children,
  ...rest
}) {
  return <PopoverButtonTitle {...rest}>{children}</PopoverButtonTitle>;
};

export default Header;
