import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts, screens } from "../../../../../styles/variables";

export const Container = styled.div`
  background: white;
  border: 0.7px solid rgba(238, 241, 242, 1);
  border-radius: 15px;
  color: #eef1f2;
  font-family: ${fonts.gilroy};
  padding: 28px 27px;

  @media ${screens.lg} {
    flex-basis: 45%;
  }
`;

export const Title = styled.h3`
  color: black;
  font-size: 1.7rem;
  font-weight: 600;

  @media ${screens.md} {
    font-weight: 700;
  }
`;

export const Text = styled.p`
  color: #d0d0d0;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Img = styled.img``;

export const IconContainer = styled.div`
  display: flex;
  font-size: 1.9rem;
  margin-right: 0;
`;

export const ButtonLink = styled(ReactRouterLink)`
  align-items: center;
  border: 2px solid rgba(51, 113, 245, 1);
  border-radius: 15px;
  color: #3371f5;
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 16px;
  padding: 13px 17px;
  width: 100%;
`;
