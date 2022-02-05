import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  align-items: center;
  display: flex;
  left: 50%;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function AbsoluteCenter({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default AbsoluteCenter;
