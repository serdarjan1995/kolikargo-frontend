import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts, indexes } from "../../../../styles/variables";

export const Container = styled.div`
  background: #fcfcfd;
  border-radius: 20px;
  filter: drop-shadow(0 40px 32px rgba(15, 15, 15, 0.12));
  min-width: 292px;
  padding: 16px;
  padding-top: 30px;
  position: absolute;
  right: 0;
  top: calc(100% + 24px);
  z-index: ${indexes.poppedUI};
`;

export const List = styled.ul`
  & li + * {
    margin-top: 36px;
  }
`;

export const Item = styled.li``;

export const ButtonLink = styled(ReactRouterLink)`
  align-items: center;
  color: #777e90;
  display: flex;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
  transition: color 150ms;

  &:hover,
  &:focus {
    color: #000000;
  }
`;

export const Text = styled.p``;

export const HR = styled.hr`
  background-color: #E6E8EC;
  border: none;
  height: 1px;
  margin-top: 32px;
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: 2rem;
  margin-right: 15px;
`;
