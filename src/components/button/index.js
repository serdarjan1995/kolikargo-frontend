import React from "react";
import { useHistory } from "react-router";
import { LeftArrowThin } from "../icons";
import {
  IconButton as IB,
  LargeButton,
  SmallButton,
  GoBackButton as GoBackBtn,
} from "./styles/button";

function Button({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

function ButtonLarge({ children, ...rest }) {
  return <LargeButton {...rest}>{children}</LargeButton>;
}

function ButtonSmall({ children, ...rest }) {
  return <SmallButton {...rest}>{children}</SmallButton>;
}

function IconButton({ children, ...rest }) {
  return <IB {...rest}>{children}</IB>;
}

function GoBackButton({ children, ...rest }) {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <GoBackBtn onClick={handleClick} {...rest}>
      <LeftArrowThin />
    </GoBackBtn>
  );
}

export { Button, ButtonLarge, ButtonSmall, IconButton, GoBackButton };
