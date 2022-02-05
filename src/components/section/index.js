import React from "react";
import { Container } from "./styles/section";

function Section({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Section;
