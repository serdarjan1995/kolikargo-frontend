import React from "react";
import {
  Button,
  Container,
  Item,
  List,
  Text,
  TextSmall,
} from "./styles/language-dropdown";

function LanguageDropdown({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

LanguageDropdown.List = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <List ref={ref} {...rest}>
      {children}
    </List>
  );
});

LanguageDropdown.Item = function LanguageDropdownItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

LanguageDropdown.Button = function LanguageDropdownButton({
  children,
  ...rest
}) {
  return <Button {...rest}>{children}</Button>;
};

LanguageDropdown.Text = function LanguageDropdownText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

LanguageDropdown.TextSmall = function LanguageDropdownTextSmall({
  children,
  ...rest
}) {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

export default LanguageDropdown;
