import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts } from "../../../../styles/variables";

export const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.03);
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  font-family: ${fonts.gilroy};
  padding: 23px 25px;
`;

export const Title = styled.h3`
  color: #bebebe;
  font-size: 1.3rem;
  font-weight: 400;
`;

export const Text = styled.p`
  color: black;
  font-size: 1.4rem;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
`;
