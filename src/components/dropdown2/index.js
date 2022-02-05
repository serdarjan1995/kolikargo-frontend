import React from 'react';
import {
  Container,
  Wrapper,
  List,
  Item,
  Link,
  Button,
  ToggleButton,
  Text,
} from './styles/dropdown2';

function Dropdown2({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Dropdown2.Wrapper = function Dropdown2Wrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Dropdown2.List = function Dropdown2List({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Dropdown2.Item = function Dropdown2Item({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Dropdown2.Link = function Dropdown2Link({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Dropdown2.Button = function Dropdown2Button({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Dropdown2.ToggleButton = function Dropdown2ToggleButton({ children, ...rest }) {
  return <ToggleButton {...rest}>{children}</ToggleButton>;
};

Dropdown2.Text = function Dropdown2Text({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

export default Dropdown2;