import React from "react";
import styled from "styled-components/macro";
import { fonts } from "../../styles/variables";

const Indicator = styled.p`
  font-family: ${fonts.BaiJamjuree};
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  right: 18px;
  transform: translateY(-50%);
  top: 50%;
`;

function KgIndicator({ children, ...rest }) {
  return <Indicator {...rest}>{children}</Indicator>;
}

export default KgIndicator;
