import styled from "styled-components/macro";
import { fonts, transitions } from "../../../../styles/variables";

export const Container = styled.div`
  background: white;
  border: 1px solid currentColor;
  border-bottom-color: ${({ active }) => (active ? "white" : "currentColor")};
  border-radius: ${({ active }) => (active ? "12px 12px 0 0" : "12px")};
  color: rgba(236, 238, 244, 1);
  width: 100%;
`;

export const List = styled.ul`
  background: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid rgba(236, 238, 244, 1);
  border-top: 0;
  font-family: ${fonts.BaiJamjuree};
  position: absolute;

  z-index: 10;
  width: 100%;
`;

export const Item = styled.li``;

export const Button = styled.button`
  padding: 11px 20px;
  text-align: left;
  transition: ${transitions.buttonBgHover};
  width: 100%;

  &:hover,
  &:focus {
    background: #f0f5ff;
  }
`;

export const ToggleButton = styled.button`
  color: #23262f;
  padding: 12px 20px;
  text-align: left;
  line-height: 24px;
  width: 100%;
`;

export const IconContainer = styled.div`
  align-items: center;
  border: 2px solid rgba(230, 232, 236, 1);
  border-radius: 50%;
  color: #777e90;
  display: flex;
  height: 32px;
  justify-content: center;
  position: absolute;
  pointer-events: none;
  right: 8px;
  transform: ${({ active }) =>
    active ? "translateY(-50%) rotate(180deg)" : "translateY(-50%);"};
  top: 50%;
  width: 32px;
`;
