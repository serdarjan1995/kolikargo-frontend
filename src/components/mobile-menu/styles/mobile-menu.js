import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts, indexes, transitions } from "../../../styles/variables";
import { HoveredBlueBtnStyle } from "../../../styles/mixins";

export const Container = styled.div`
  background: #fff;
  min-height: 100vh;
  padding: 35px 17px;
  position: fixed;
  right: 0;
  transition: transform 300ms;
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  z-index: ${indexes.mobileMenu};
`;

export const Nav = styled.nav`
  margin-top: 50px;
`;

export const List = styled.ul`
  & li + * {
    margin-top: 37px;
  }
`;

export const Item = styled.li`
  color: black;
`;

export const Box = styled.div`
  display: flex;
  margin-top: 106px;
`;

export const SearchBoxContainer = styled.div`
  align-items: center;
  border: 2px solid #e6e8ec;
  border-radius: 15px;
  display: flex;
  padding: 10px 14px;
  position: relative;
  transition: width 200ms;
  width: ${({ active }) => (active ? "100%" : "120px")};
`;

export const SearchBox = styled.input`
  font-family: ${fonts.dmSans};
  font-size: 1.6rem;
  font-weight: 700;
  height: 100%;
  line-height: 2;
  outline: none;
  width: 100%;

  &::placeholder {
    color: black;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  align-items: center;
  color: inherit;
  display: flex;
  padding: 0.7em 0;
`;

export const Button = styled.button`
  border: 1px solid #e6e8ec;
  border-radius: 10px;
  color: #23262f;
  flex-basis: 100%;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0em;
  min-width: 117px;
  padding: 10px 20px;
`;

export const ButtonAction = styled(Button)`
  background-color: #3b71fe;
  border: none;
  color: white;
  margin-right: 10px;
  transition: ${transitions.buttonBgHover};

  &:hover,
  &:focus {
    ${HoveredBlueBtnStyle}
  }
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: 1.7rem;
  margin-right: 13px;
`;

export const ButtonText = styled.p`
  font-family: ${fonts.gilroy};
  font-weight: 600;
`;
