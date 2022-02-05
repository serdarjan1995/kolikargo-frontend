import React from "react";
import {
  Container,
  List,
  ButtonLink,
  Item,
  IconContainer,
} from "./styles/cargos-menu";

function CargosMenu({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CargosMenu.List = function CargosMenuList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

CargosMenu.Item = function CargosMenuItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

CargosMenu.IconContainer = function CargosMenuIconContainer({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

CargosMenu.ButtonLink = function CargosMenuButtonLink({ children, ...rest }) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};


export default CargosMenu;

