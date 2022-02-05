import styled from "styled-components/macro";
import {
  HoveredBlueBtnStyle,
  PrimaryBtnStyle,
  SecondaryBtnStyle,
} from "../../../styles/mixins";
import { colors, fonts, screens, transitions } from "../../../styles/variables";

export const Container = styled.button`
  background: ${({ variant }) =>
    variant ? (variant === "secondary" ? "white" : colors.blue) : colors.blue};
  padding: 58px 18px;
`;

export const LargeButton = styled.button`
  ${PrimaryBtnStyle}
  border-radius: 20px;
  font-family: ${fonts.gilroy};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 21px;
  padding: 21px 50px;
  outline: none;
  width: ${({ full }) => (full ? "100%" : "initial")};

  &:hover,
  &:focus {
    ${HoveredBlueBtnStyle}
  }

  ${({ variant }) => variant === "secondary" && SecondaryBtnStyle}

  &:disabled {
    background: #d2d2d2;
    color: #a4a4a4;
  }

  @media ${screens.lg} {
    font-size: 1.7rem;
  }
`;

export const IconButton = styled.button`
  align-items: center;
  background-color: #3b71fe;
  border-radius: 10px;
  color: ${({ color }) => color || "white"};
  display: flex;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  transition: ${transitions.buttonBgHover};
  width: 32px;

  &:hover,
  &:focus {
    background: #2965e5;
  }
`;

export const SmallButton = styled.button`
  background: #3371f5;
  border-radius: 15px;
  color: white;
  font-family: ${fonts.gilroy};
  font-size: 1.6rem;
  font-weight: 600;
  padding: 13px 30px;
  transition: ${transitions.buttonBgHover};

  &:hover,
  &:focus {
    background: #2965e5;
  }
`;

export const GoBackButton = styled.button`
  align-items: center;
  background: #f3f5fa;
  border-radius: 10px;
  display: flex;
  height: 39px;
  justify-content: center;
  width: 44px;

  @media ${screens.lg} {
    display: none;
  }
`;
