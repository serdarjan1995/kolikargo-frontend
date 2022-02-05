import React from "react";
import {
  Button,
  Container,
  IconContainer,
  Link,
  Menu,
  MenuItem,
  MenuLink,
} from "./styles/dropdown";

export default function Dropdown({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dropdown.Link = function DropdownLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Dropdown.Menu = function DropdownMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Dropdown.MenuItem = function DropdownMenuItem({ children, ...restProps }) {
  return <MenuItem {...restProps}>{children}</MenuItem>;
};

Dropdown.IconContainer = function DropdownIconContainer({ children, ...restProps }) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};

Dropdown.Button = function DropdownButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Dropdown.MenuLink = function DropdownMenuLink({ children, ...restProps }) {
  return <MenuLink {...restProps}>{children}</MenuLink>;
};
