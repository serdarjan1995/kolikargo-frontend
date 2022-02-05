import React from "react";
import {
  Container,
  List,
  Item,
  ButtonLink,
  Text,
  IconContainer,
  HR,
} from "./styles/account-dropdown-menu";

function AccountDropdownMenu({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountDropdownMenu.List = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <List ref={ref} {...rest}>
      {children}
    </List>
  );
});

AccountDropdownMenu.Item = function AccountDropdownMenuItem({
  children,
  ...rest
}) {
  return <Item {...rest}>{children}</Item>;
};

AccountDropdownMenu.ButtonLink = function AccountDropdownMenuButtonLink({
  children,
  ...rest
}) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

AccountDropdownMenu.Text = function AccountDropdownMenuText({
  children,
  ...rest
}) {
  return <Text {...rest}>{children}</Text>;
};

AccountDropdownMenu.IconContainer = function AccountDropdownMenuIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

AccountDropdownMenu.HR = function AccountDropdownMenuHR({ children, ...rest }) {
  return <HR {...rest} />;
};

export default AccountDropdownMenu;
