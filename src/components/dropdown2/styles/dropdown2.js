import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { colors, indexes, radius, screens } from "../../../styles/variables";

export const Container = styled.div`
  background: #fff;
  border-radius: 24px;
  filter: drop-shadow(0 40px 32px rgba(15, 15, 15, 0.12));
  left: 0;
  position: absolute;
  top: calc(100% + 10px);
  overflow: hidden;
  width: 100%;
  z-index: ${indexes.poppedUI};
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width || "100%"};
`;

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: ${radius.roundedSM};
  color: ${({ variant }) => (variant === "red" ? colors.red : colors.grayText)};
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 15px 20px;
  text-align: start;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #F4F5F6;
  }
`;

export const ToggleButton = styled(Button)`
  padding: 20px;
  width: 100%;
  @media ${screens.xl} {
    padding: 15px;
  }
`;

export const List = styled.ul`
  background: #fcfcfd;
  padding: 5px 15px;
  text-align: start;
  width: 100%;
`;

export const Item = styled.li`
  color: ${({ variant }) => variant || "inherit"};
`;

export const Link = styled(ReactRouterLink)`
  border-radius: ${radius.roundedSM};
  color: inherit;
  display: block;
  padding: 15px;
  outline: none;
  &:hover,
  &:focus {
    background-color: #F4F5F6;
  }
`;

export const Text = styled.p`
  line-height: 0.1;
  margin-right: 18px;
`;
