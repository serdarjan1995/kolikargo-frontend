import React from "react";
import { ChevronDownIcon } from "../../icons";
import {
  Container,
  List,
  Item,
  Button,
  ToggleButton,
  IconContainer,
} from "./styles/overlay-dropdown";

function OverlayDropdown({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

OverlayDropdown.List = function OverlayDropdownList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

OverlayDropdown.Item = function OverlayDropdownItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

OverlayDropdown.Button = function OverlayDropdownButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

OverlayDropdown.IconContainer = function OverlayDropdownIconContainer({
  ...rest
}) {
  return (
    <IconContainer {...rest}>
      <ChevronDownIcon />
    </IconContainer>
  );
};

OverlayDropdown.ToggleButton = function OverlayDropdownToggleButton({
  children,
  ...rest
}) {
  return <ToggleButton {...rest}>{children}</ToggleButton>;
};

export default OverlayDropdown;
