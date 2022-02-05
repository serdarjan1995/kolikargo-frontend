import React from "react";
import { StarIcon } from "../../icons";
import { Container, IconContainer, Rate } from "./styles/rating";

function Rating({ children, rate, star = false, ...rest }) {
  return (
    <Container {...rest}>
      {star && (
        <IconContainer>
          <StarIcon />
        </IconContainer>
      )}
      <Rate>{rate}</Rate>
      {children}
    </Container>
  );
}

export default Rating;
