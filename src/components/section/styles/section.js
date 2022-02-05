import styled from "styled-components/macro";
import { padding, screens } from "../../../styles/variables";

export const Container = styled.div`
  margin: 0 auto;
  padding-left: ${({ variant }) =>
    variant === "common2" ? padding.mobileCommon2 : padding.mobileCommon};
  padding-right: ${({ variant }) =>
    variant === "common2" ? padding.mobileCommon2 : padding.mobileCommon};

  @media ${screens.lg} {
    padding: 0;
  }
`;
