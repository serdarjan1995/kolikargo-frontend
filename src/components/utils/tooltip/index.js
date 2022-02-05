import React from "react";
import { ExclamationIcon } from "../../icons";
import { Container, IconContainer, Text } from "./styles/tooltip";

function Tooltip({ children, ...rest }) {
  return (
    <IconContainer {...rest}>
      <ExclamationIcon />
      <Container>
        <Text>{children}</Text>
      </Container>
    </IconContainer>
  );
}

export default Tooltip;
