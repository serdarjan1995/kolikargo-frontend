import React from "react";
import {
  Container,
  Button,
  List,
  Item,
  IconContainer,
} from "./styles/cargo-picker-searchbox";

function CargoPickerSearchbox({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CargoPickerSearchbox.List = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <List ref={ref} {...rest}>
      {children}
    </List>
  );
});

CargoPickerSearchbox.Item = function CargoPickerSearchboxItem({
  children,
  ...rest
}) {
  return <Item {...rest}>{children}</Item>;
};

CargoPickerSearchbox.Button = function CargoPickerSearchboxButton({
  children,
  ...rest
}) {
  return <Button {...rest}>{children}</Button>;
};

CargoPickerSearchbox.IconContainer =
  function CargoPickerSearchboxIconContainer({ children, ...rest }) {
    return <IconContainer {...rest}>{children}</IconContainer>;
  };

export default CargoPickerSearchbox;
