import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts } from "../../../../styles/variables";

export const Container = styled.div`
  font-family: ${fonts.BaiJamjuree};
  margin: auto;
  text-align: center;
`;

export const IconContainer = styled.div`
  color: #0ac05e;
  display: flex;
  font-size: 12.3rem;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 37px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
`;

export const Link = styled(ReactRouterLink)`
  color: ${({ variant: orange }) => (orange ? "orange" : "#3371F5")};
  font-size: 1.7rem;
  font-weight: 600;
`;
