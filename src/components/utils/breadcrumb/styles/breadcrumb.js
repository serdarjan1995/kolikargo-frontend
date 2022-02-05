import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts } from "../../../../styles/variables";

export const Container = styled.div``;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
`;

export const ButtonLink = styled(ReactRouterLink)`
  color: ${({ active }) => (active ? "#B1B5C3" : "#777e90")};
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
`;

export const IconContainer = styled.div`
  color: #b1b5c3;
  margin: 0 17px;
`;
