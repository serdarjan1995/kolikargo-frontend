import React from "react";
import { Container } from "./styles/main-layout";

function Main({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Main;
