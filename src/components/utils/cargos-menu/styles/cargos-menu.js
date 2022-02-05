import styled from "styled-components/macro";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { fonts, screens, transitions } from "../../../../styles/variables";

export const Container = styled.nav`
  border: 1px solid rgba(244, 245, 246, 1);
  border-radius: 16px;
  display: none;
  filter: drop-shadow(0 32px 64px rgba(15, 15, 15, 0.08));
  width: fit-content;

  @media ${screens.lg} {
    display: block;
  }
`;

export const List = styled.ul`
  padding: 28px 30px;
`;

export const Item = styled.li`
  color: ${({ active }) => (active ? "black" : "#777E90")};
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: 2rem;
  margin-right: 18px;
`;

export const ButtonLink = styled(ReactRouterLink)`
  align-items: center;
  border-radius: 15px;
  color: inherit;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  min-width: 200px;
  padding: 20px;
  transition: ${transitions.buttonBgHover};

  &:hover,
  &:focus {
    background: #f4f5f6;
  }
`;
