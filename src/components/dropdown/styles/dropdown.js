import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts } from "../../../styles/variables";
import { circledIconStyle } from "../../../styles/mixins";

export const Container = styled.div``;

export const Button = styled.button`
  align-items: center;
  font-family: ${fonts.poppins};
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  padding: 12px;
  width: 100%;
`;

export const MenuItem = styled.li`
  text-transform: capitalize;

  & ${Button} {
    color: ${({ active }) => (active ? "#000" : "gray")};
  }
`;

export const IconContainer = styled.div`
  color: #23262f;
  margin-left: auto;
`;

export const Menu = styled.ul`
  background: ${({ bg }) => bg || " #fff"};
  border: 1px solid #e6e8ec;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  & ${MenuItem} ${Button} ${IconContainer} {
    ${({ circledIcon }) => circledIcon && circledIconStyle}
  }

  & ${MenuItem} ${Button} {
    padding-left: 16px;
    padding-right: 16px;
  }

  & ${MenuItem}:nth-of-type(n+2) ${Button} {
    padding: 16px 16px;
  }
`;

export const Link = styled(ReactRouterLink)`
  font-size: 2rem;
`;

export const MenuLink = styled(ReactRouterLink)`
  align-items: center;
  color: inherit;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0.875em 1.25em;
  width: 100%;
`;
